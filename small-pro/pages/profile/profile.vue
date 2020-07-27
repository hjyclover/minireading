<template>
	<view class="app">
		<view class="my-head">
			<!-- 设置 -->
			<view class="signBox cardItem" @click="goToPage('./sign')">
				<view class="zwyHover2" >
					<i class='iconfont icon-shezhi '></i>
				</view>
			</view>
			<view class="userPortrait" @click="goToPage('./userInfo')">
				<image src="../../static/image/my/aaas.jpg" mode="widthFix"></image>
			</view>
			<view class="userInfo">
				<text>{{username}}</text>
				<text class="userId">MINI号: {{userId}}</text>
				<view class="userDcript">
					<text>个性签名: </text>
					<text>{{userDcrip}}</text>
				</view>
				<view class="attendAndpost">
					<view>
						<text>解读人</text>
						<text>666</text>
					</view>
					<view>
						<text>同林鸟</text>
						<text>555</text>
					</view>
				</view>
			</view>
			<view class="actionList">
				<view class="actionListItem" 
					v-for="item in actionList" :key="item.id" 
					@click="tapActionItem(item.id)"
					:class="[item.id == thisActions? 'actionAction':'']"
					>
					<text>{{item.cont}}</text>
					<i v-if="item.id == thisActions" class='cricleIcon'></i>
				</view>
			</view>
		</view>
		
		<view class="my-content">
			<view class="my-cont-item">
				<view class="my-cont-item-head">
					<image src="../../static/image/my/aaas.jpg" mode="widthFix" class="my-cont-userPro"></image>
					<view class="my-cont-userInfo">
						<text class="my-cont-userName">{{username}}</text>
						<text class="postTime">2019-8-19  15:40</text>
					</view>
				</view>
				
				<view class="my-cont-usermini">
					<view class="my-cont-title textellipsis">真的好辛苦,辛苦</view>
					<view class="my-cont-cont txt3Ellipsis">
						 8月17日消息，近日，有媒体报道苹果公司将于9月10日举办2019年新款iPhone发布会，随后将于9月20日在全球推出。根据TheElec最新的一份报告显示，2019.....</view>
					<view class="my-cont-audio">
						<image src="../../static/image/my/aaas.jpg" class="my-cont-audioImg"></image>
					</view>
					<view class="my-cont-action">
						<view>   <!-- 点赞默认是白色,如果点击了就变成粉色 评论不管有没有评论都是粉色 -->
							<i class="iconfont icon-dianzan"></i>
							<text>666</text>
						</view>
						<view> 
							<i class="iconfont icon-pinglun"></i>
							<text>666</text>
						</view>
					</view>
				</view> 
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				imgUrl:"../../static/image/my/aaas.jpg",
				username:"妖怡半生烟雨半城殇",
				userId:"1491140502",
				userDcrip:"介绍一下自己吧",
				actionList:[
					{
						id:0,
						cont:"我的秘密",
					},{
						id:1,
						cont:"我的解读"
					},{
						id:2,
						cont:"感同身受"
					}
				],
				thisActions:0,
				
			}
		},
		onLoad() {
		
		
		},
		methods: {
				tapActionItem(id){
					this.thisActions = id
				},
				goToPage(url){
					this.$gotoPage(url)
				
				}
			    
		},
		onPullDownRefresh() {
			let _this = this
			setTimeout(function(){
				uni.stopPullDownRefresh()
			},1000)
		},
		onHide() {
			clearTimeout()
		}
	}
</script>

<style lang="scss" scoped>
	.app{
		
		.my-head{
			width: 100%;
			height: 860upx;
			text-align: center;
			position: relative;
			display: flex;
			justify-content: center;
			color: #fff;
			&::after{
				position: absolute;
				top: 100upx;
				// left: 40upx;
				content: "mini";
				color: rgba($color: #fff, $alpha: 0.4);
				display: inline-block;
				font-weight: bolder;
				font-size: 300upx;
				letter-spacing: 10upx;
				
			}
			.userPortrait{
				position: absolute;
				top: 23%;
				z-index: 2;
				width: 250upx;
				height: 250upx;
				border-radius: 50%;
				border:10upx solid #F9F3F7;
				box-shadow: 0upx 0upx 20upx #FAF1F6;
				image{
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
			.userInfo{
				position: absolute;
				top: 57%;
				display: flex;
				flex-direction: column;
				.userDcript{
					font-size: 24upx;
				}
				.userId,.attendAndpost{
					font-size: 32upx;
				}
				.attendAndpost{
					display: flex;
					justify-content: center;
					margin-top: 50upx;
					view{
						&:first-child{
							margin-right: 20upx;
							padding-right: 20upx;
							border-right: 2upx solid #FFF;
						}
						text{
								
							&:first-child{
								margin-right: 20upx;
							}
						}
					}
				}
			}
			.actionList{
				position: absolute;
				bottom: 0;
				width: 100%;
				display: flex;
				justify-content: space-around;
				.actionListItem{
					padding-bottom: 20upx;
					.cricleIcon{ 
						background-color: #fff;
						margin-left: 10upx;
					}
				}
				.actionAction{
					border-bottom: 4upx solid #fff;
				}
			}
			
			.signBox{
				position: absolute;
				right: 50upx;
				top: 10upx;
				.iconfont{
					display: block;
					font-size: 56upx !important;
					color: #ff0081;
					z-index: 999;
					top: -10%;
				}
				
				
			}
		
		}
	
		.my-content{
			width: 100%;  
			min-height: 600upx;
			background-color: rgba($color: #F7EAE2, $alpha: 0.3);
			padding: 40upx;
			box-sizing: border-box;
			
			.my-cont-item{
				width: 100%;
				background-color: rgba($color: #fff, $alpha: 0.3);
				border-radius: 10upx;
				padding: 20upx;
				box-sizing: border-box;
				.my-cont-item-head{
					display: flex;
				
					.my-cont-userPro{
						width: 100upx;
						height: 100upx;
						border-radius: 50%;
					}
					.my-cont-userInfo{
						display: flex;
						flex-direction: column;
						line-height: 1.5;
						height: 100upx;
						justify-content: center;
						margin-left: 20upx;
						
						.my-cont-userName{
							font-size: 30upx;
							font-weight: bolder;
						}
						
						.postTime{
							font-size: 28upx;
							color: #A9A9A9;
						}
					}
					
				}
				.my-cont-usermini{
					margin-top: 20upx;
					.my-cont-title{
						font-weight: bolder;
						
					}
					.my-cont-cont{
						color: #6D6A6A;
						font-size: 30upx;
					}
					.my-cont-audio{
						margin-top: 20upx;
						width: 100%;
						height: 320upx;
						border-radius: 30upx;
						.my-cont-audioImg{
							width: 100%;
							height: 100%;
							border-radius: 30upx; 
						}
					}
					.my-cont-action{
						display: flex;
						justify-content: space-around;
						margin-top: 20upx;
						.iconfont{
							color: #E0809B;
							margin-right: 20upx;
						}
					}
				}
			}
		}
	
	}
	

</style>
