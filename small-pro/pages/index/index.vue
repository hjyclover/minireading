<template>
	<view class='cropper-content'>
		<button type="default" @tap="blueteep">搜索蓝牙设备</button>
		<view class="devicesName">
			<view>设备名称</view>
			<view class="devices" v-for="(item,index) in devices" :key="item.deviceId" @tap="connetionBluet(item.deviceId)">
				{{item.name}}
				<br>
				{{item.deviceId}}
			</view>
		</view>
	</view>
</template>
<script>
	let _this
	export default {
		data() {
			return {
				devices: []
			}
		},
		onLoad() {
			wx.showModal({
						content: '允许获取地理位置',
						success(res) {
							if (res.confirm) {
								console.log('用户点击确定')
								wx.openSetting({
										success: (res) => {
												let data = res.authSetting
												if (data['scope.userLocation']) {
													wx.getLocation({
														type: 'wgs84', //表示使用GPS定位
														success: (res) => {
															console.log("定位成功 = ", res)
															
															
														},
														//表示用户没有开启授权
														fail: (res) => {
															this.setData({
																errMsg: res.errMsg
															})
															console.log(this.data)
															wx.showToast({
																title: '已取消定位服务,点击地址，可授权开启定位服务',
																icon: 'none'
															})
														}
													})
												}
										}
								})
								
							}
						}
					})
					
				},
				onShow() {
					_this = this


					// console.log("初始化数据")
					// this.getBluetIsOk()
					// try {
					//     const res = uni.getSystemInfoSync();
					// console.log(res.bluetoothEnabled);

					// console.log(res.version);
					//     console.log(res.platform);
					// } catch (e) {
					// error
					// }

				},
				methods: {
					blueteep() {
						console.log("打开定位权限")

						wx.openBluetoothAdapter({
							success(res) {
								// console.log('请求成功')
								// console.log(res)
								_this.findDevice()
								_this.listenBluetooth()

							},
							fail(err) {
								// console.log("请求失败")
								console.log(err)
								wx.showToast({
									title: "请开启手机蓝牙",
									icon: "none",
									duration: 2000
								})
							},

						})
					},
					// 检测蓝牙是否可用
					getBluetIsOk() {
						console.log("监听蓝牙是否可用")
						wx.getBluetoothAdapterState({
							success(res) {
								console.log("监听成功")
								console.log(res)
							},
							fail(Err) {
								console.log("监听失败")
								console.log(Err)
							}

						})
					},
					//监听蓝牙开关
					listenBluetooth() {
						// console.log("监听蓝牙状态")
						wx.onBluetoothAdapterStateChange(function(res) {
							console.log('adapterState changed, now is', res)
							let available = res.available //蓝牙适配器是否可用
							let discovering = res.discovering // 是否处于搜索状态
							if (available) {
								wx.showToast({
									title: "开启蓝牙成功",
									icon: "none",
									duration: 2000
								})
							} else {
								wx.showToast({
									title: "开启蓝牙失败",
									icon: "none",
									duration: 2000
								})
							}
						})
					},
					search() {
						wx.onBluetoothDeviceFound(function(res) {
							console.log("搜索新设备")
							_this.devices = res.devices
						})
					},
					// 搜索设备
					findDevice() {
						let that = this
						console.log("查找设备")
						wx.startBluetoothDevicesDiscovery({
							allowDuplicatesKey: false,
							interval: 0,
							success: function(res) {
								console.log(res)
								wx.showLoading({
									title: '正在搜索设备',

								})
								wx.getBluetoothDevices({
									success(res) {
										console.log(res)
										setTimeout(() => {
											wx.hideLoading()
										}, 2000)

										_this.devices = res.devices

										if (res.devices[0]) {
											console.log("advertisData")
											console.log(_this.ab2hex(res.devices[0].advertisData))
										}
									}
								})

							},
							complete: function(com) {
								console.log(com)
							},
						})
					},
					// 连接设备
					connetionBluet(id) {
						console.log(id)
						wx.showLoading({
							title: '正在连接设备',

						})
						wx.createBLEConnection({
							// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
							deviceId: id,
							setTimeout: 10000,
							success(res) {
								console.log(res)

								wx.getBLEDeviceServices({
									// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
									deviceId: id,
									success(res) {
										wx.hideLoading()
										console.log('device services:', res.services)
									}
								})
							}
						})
					},
					// ArrayBuffer转16进度字符串示例
					ab2hex(buffer) {
						var hexArr = Array.prototype.map.call(
							new Uint8Array(buffer),
							function(bit) {
								return ('00' + bit.toString(16)).slice(-2)
							}
						)
						return hexArr.join('');
					}

				}
		}
</script>

<style>
	.cropper-content {
		width: 100%;
		height: 100%;
	}

	.devices {
		margin-top: 50upx;
		width: 100%;
		height: 160upx;
		border-bottom: 1upx solid #eee;
	}
</style>
