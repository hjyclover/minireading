<template>
	<view>
		<view class="miniHide">
			<minilist :lists='lists'></minilist>  
		</view> 
		
		<!-- 发布秘密 -->
		<view class="add" >
			<view class="addIcon">
				<i class="iconfont icon-tianjia "></i>
			</view>
		</view>
	</view>
</template>

<script>
	import miniList from '@/components/mini-list-hide/mini-list-hide.vue'
	export default {
		components:{
			"minilist":miniList
		},
		data() {
			return {
				lists:[
					{
						id:0,
						userPro:'../../static/image/my/aaas.jpg',
						userName:"妖怡半生烟雨半城殇",
						postTime:"2019-8-19 15:40",
						contTitle:"真的好辛苦,辛苦",
						contTxt:"8月17日消息，近日，有媒体报道苹果公司将于9月10日举办2019年新款iPhone发布会，随后将于9月20日在全球推出。根据TheElec最新的一份报告显示，2019.....",
						articlePic:"../../static/image/my/aaas.jpg",
						likes:666,
						discuss:555
					},
				]
			}
		},
		methods: {
			
		},
		onPullDownRefresh() {
			let _this = this
			setTimeout(function(){
				uni.stopPullDownRefresh()
			},1000)
		}
	}
</script>

<style lang="scss">
		.miniHide{
			padding: 0 30rpx;
			box-sizing: border-box;
			
		}
		.add{
			position: fixed;
			bottom: 10%;
			right: 3%;
			width: 130upx;
			height: 130upx;
			line-height: 130upx;
			border-radius: 50%;
			box-shadow: 0 0 10upx #C0C0C0;
			background-color: rgba($color: #ffffff, $alpha: 0.5);
			text-align: center;
			animation: flag 3s linear infinite;
			.addIcon{
				.iconfont{
					display: inline-block;
					color: #F5B4D2;
					font-size: 80upx; 
					animation: swear 1s linear infinite;
				}
			}
			
		}
		 
		@keyframes flag{
			0% {box-shadow: 0 0 60upx #f4f4f4;}
			50%{box-shadow: 0 0 10upx #C0C0C0;}
			100% {box-shadow: 0 0 60upx #f4f4f4;}
		}
		@keyframes swear{
			0%{
				transform: rotateY(-90deg);
			}
			100%{
					transform: rotateY(90deg);
			}
		}
</style>
