<template>
	<view class="addPage">
		<form @submit="sendInfo()" class="loginCont">
			<input type="text" focus placeholder="请输入标题" placeholder-class="holdColor" />
			<textarea  placeholder="请写入心情" class="addCont"  placeholder-class="holdColor"
				auto-height='true'
			/>
			<view class="uploadImg">
				<i class='iconfont icon-icontianjiatupian' @click='uploadImg()'></i>
				<image  v-for="(item,index) in onLoadImgUrl " :key='item' 
						:src="item" class="uploadImgArr" 
						@click='preViewImg(item)'></image>
			</view>
			<button form-type="submit" size="mini">发 布</button>
		</form>
	</view>
</template>

<script>
	let app = ''
	export default {
		data() {
			return {
				onLoadImgUrl:[]
			};
		},
		onLoad() {
		
		},
		methods:{
		
			uploadImg(){
				let _this = this
				uni.chooseImage({
					count:1,
					sizeType:['compressed'],
					sourceType:['album',"camera"],
					success(res){
						console.log(res)
						// _this.$Msg('上传成功',"success")
						if(res.errMsg = "chooseImage:ok"){
							let fild = res.tempFilePaths[0]
							_this.onLoadImgUrl.push(fild)
						}
						
					},
					fail(err) {
						_this.$Msg('上传失败')
					}
					
				})
			},
			preViewImg(e){
				let url = e
				console.log(e)
				uni.previewImage({
					urls:url,
					longPressActions: {
						itemList: ['保存图片'],
						success: function(data) {
								console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
								console.log(err.errMsg);
						}
					}
				})
			},
			sendInfo(){
				console.log("发送心情")
			}
			
		}
	}
</script>

<style lang="scss">
	
	.addPage{
		width: 90%;
		overflow: hidden;
		margin-left: 5%;
		input,button{
			width: 100%;
			height: 80upx;
			padding: 10upx;
			box-sizing: border-box;
			background-color: transparent;
			border:1upx solid rgba($color: #fff, $alpha: 0.5);
			border-radius: 20upx;
			margin-bottom: 30upx;
			color: #fff;
			&::after{
				border-color: transparent;
			}
		}
		input{
			border: none;
			border-radius: 0;
			border-bottom:1upx solid rgba($color: #fff, $alpha: 0.5);
		}
		textarea{
			color: #FFFFFF;
			width: 100%;
			min-height: 500upx;
			max-height: 800upx;
		}
		.addCont{
			background-color: rgba($color: #ffffff, $alpha: 0.2);
			padding: 20upx;
			box-sizing: border-box;
		}
		
		.uploadImg{
			margin-top: 20upx;
			.iconfont{
				font-size: 80upx;
				color: #F4F4F4;
			}
			.uploadImgArr{
				margin-left: 20upx;
				width: 100upx;
				height: 100upx;
			}
			
		}
	}
</style>
