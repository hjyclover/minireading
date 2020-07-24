<template>
	<view v-if="lists.length > 0">
		<view class="my-content" >
			<view class="my-cont-item" v-for="(item,index) in lists" :key='index' >	
				<view class="my-cont-item-head" @click="contDetail(item.id)">
					<image :src="item.userPro" mode="widthFix" class="my-cont-userPro"></image>
					<view class="my-cont-userInfo">
						<text class="my-cont-userName">{{item.userName}}</text>
						<text class="postTime">{{item.postTime}}</text>
					</view>
				</view>

				<view class="my-cont-usermini">
					<view class="my-cont-title textellipsis" @click="contDetail(item.id)">{{item.contTitle}}</view>
					<view class="my-cont-cont txt3Ellipsis" @click="contDetail(item.id)">{{item.contTxt}}</view>
					<view class="my-cont-audio" @click="contDetail(item.id)">
						<image :src="item.articlePic" class="my-cont-audioImg"></image>
					</view>
					<view class="my-cont-action">
						<view>
							<!-- 点赞默认是白色,如果点击了就变成粉色 评论不管有没有评论都是粉色 -->
							<i class="iconfont icon-dianzan"></i>
							<text>{{item.likes}}</text>
						</view>
						<view>
							<i class="iconfont icon-pinglun"></i>
							<text>{{item.discuss}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			lists: {
				type: Array,
				value: []
			}
		},
		data() {
			return {

			};
		},
		methods:{
			contDetail(id){
				let acticleId = id;
				uni.navigateTo({
					url:"../../pages/home/articleDetails/articleDetails?id="+acticleId
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my-content {
		width: 100%;
		min-height: 600upx;
		background-color: rgba($color: #F7EAE2, $alpha: 0.3);
		padding: 40upx;
		box-sizing: border-box;

		.my-cont-item {
			width: 100%;
			background-color: rgba($color: #fff, $alpha: 0.3);
			border-radius: 10upx;
			padding: 20upx;
			box-sizing: border-box;
			margin-bottom: 20upx;
			.my-cont-item-head {
				display: flex;

				

				.my-cont-userInfo {
					display: flex;
					flex-direction: column;
					line-height: 1.5;
					height: 100upx;
					justify-content: center;
					margin-left: 20upx;

					.my-cont-userName {
						font-size: 30upx;
						font-weight: bolder;
					}

					.postTime {
						font-size: 28upx;
						color: #A9A9A9;
					}
				}

			}

			.my-cont-usermini {
				margin-top: 20upx;

				.my-cont-title {
					font-weight: bolder;

				}

				.my-cont-cont {
					color: #6D6A6A;
					font-size: 30upx;
				}

				.my-cont-audio {
					margin-top: 20upx;
					width: 100%;
					height: 320upx;
					border-radius: 30upx;

					.my-cont-audioImg {
						width: 100%;
						height: 100%;
						border-radius: 30upx;
					}
				}

				.my-cont-action {
					display: flex;
					justify-content: space-around;
					margin-top: 20upx;

					.iconfont {
						color: #E0809B;
						margin-right: 20upx;
					}
				}
			}
		}
	}
</style>
