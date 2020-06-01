<template>
	<view class="app">
		<view class="profile-head" :style="{backgroundImage:'url('+imgUrl+')'}">
			<view class="profile-img">
				<image src="../../static/image/my/aaas.jpg" mode="widthFix" ></image>
				<view>{{username}}</view>
			</view>
		</view>
		<view class="profile-cont">
			<!-- 包含图标 -->
			<uni-list>
			    <uni-list-item title="标题文字" :show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
			</uni-list>
		</view>
		
		
		
		<view class="section">
		  <view class="section__title">多列选择器</view>
		  <picker mode="multiSelector" bindchange="bindMultiPickerChange" bindcolumnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
		    <view class="picker">
		      当前选择：{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
		    </view>
		  </picker>
		</view>
		
		
	</view>
</template>

<script>
	let app  = ''
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
		data() {
			return {
				imgUrl:"../../static/image/my/aaas.jpg",
				username:"妖怡半生烟雨半城殇",
				multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
				multiIndex: [0, 0, 0],
			}
		},
		onLoad() {
			app = getApp()
			// console.log(app.globalData.systemInfo)
			console.log(this)
		
		},
		methods: {
			 bindMultiPickerChange: function (e) {
			    console.log('picker发送选择改变，携带值为', e.detail.value)
			    this.setData({
			      multiIndex: e.detail.value
			    })
			  },
			  bindMultiPickerColumnChange: function (e) {
			    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
			    var data = {
			      multiArray: this.data.multiArray,
			      multiIndex: this.data.multiIndex
			    };
			    data.multiIndex[e.detail.column] = e.detail.value;
			    switch (e.detail.column) {
			      case 0:
			        switch (data.multiIndex[0]) {
			          case 0:
			            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
			            data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
			            break;
			          case 1:
			            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
			            data.multiArray[2] = ['鲫鱼', '带鱼'];
			            break;
			        }
			        data.multiIndex[1] = 0;
			        data.multiIndex[2] = 0;
			        break;
			      case 1:
			        switch (data.multiIndex[0]) {
			          case 0:
			            switch (data.multiIndex[1]) {
			              case 0:
			                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
			                break;
			              case 1:
			                data.multiArray[2] = ['蛔虫'];
			                break;
			              case 2:
			                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
			                break;
			              case 3:
			                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
			                break;
			              case 4:
			                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
			                break;
			            }
			            break;
			          case 1:
			            switch (data.multiIndex[1]) {
			              case 0:
			                data.multiArray[2] = ['鲫鱼', '带鱼'];
			                break;
			              case 1:
			                data.multiArray[2] = ['青蛙', '娃娃鱼'];
			                break;
			              case 2:
			                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
			                break;
			            }
			            break;
			        }
			        data.multiIndex[2] = 0;
			        break;
			    }
			    console.log(data.multiIndex);
			    this.setData(data);
			  },
		}
	}
</script>

<style lang="scss" scoped>
	image{
		width: 100%;
	}
	.app{
		.profile-head{
			width: 100%;
			height: 350upx;
			position: relative;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			.profile-img{
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				image{
					width: 140upx;
					border-radius: 50%;
				}
				
			}
		}
		.profile-cont{
			padding-top: 100upx;
			background: #f4f4f4;
		}
	}
</style>
