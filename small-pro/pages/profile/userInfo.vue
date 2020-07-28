<template>
	<view class="userInfoPage">
		<view class="head">
			<view class="userInfoItem">
				<text class="count">666</text>
				<text class="txt">解读人</text>
			</view>
			<view class="userPortrait">
				<image src="../../static/image/my/aaas.jpg" mode="widthFix"></image>
			</view>
			<view class="userInfoItem">
				<text class="count">555</text>
				<text class="txt">同林鸟</text>
			</view>
		</view>
		<view class="userMainInfo">
			<view class="userName">妖怡半生烟雨半城殇</view>
			<view class="number">MINI号: 123456789</view>
			<view class="userDcrip">
				<input type="text" v-if="showEdit" focus v-model="userDcrip" class="inp"
				 @confirm="changeDesc($event)" confirm-type="go" @blur="changeDesc($event)" />
				<view class="staticTxt" v-else>
					<text>{{userDcrip}}</text>
					<i class='iconfont icon-wulumuqishigongandashujuguanlipingtai-ico-' 
					@click='editDesc()'></i>
				</view>
			</view>
		</view>
		
		<view class="my-content">
			<view class="my-cont-item">
				<view class="my-cont-item-head">
					<image src="../../static/image/my/aaas.jpg" mode="widthFix" class="my-cont-userPro"></image>
					<view class="my-cont-userInfo">
						<text class="my-cont-userName">lalal</text>
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
				userDcrip:"8月17日消息，近日，有媒体报道苹果公司将",
				showEdit:false
			}
		},
		methods: {
			editDesc(){
				this.showEdit = true
			},
			changeDesc(e){
				let val = e.detail.value
				this.userDcrip = val
				this.showEdit = false
				console.log(val)
			}
		}
	}
</script>

<style lang="scss" scoped>
.userInfoPage{
	color: #FFFFFF;
	.head{
		display: flex;
		justify-content: space-between;
		padding: 30upx;
		box-sizing: border-box;
		
		
		.userInfoItem{
			width: 180upx;
			height: 250upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.count{
				font-size: 40upx;
			}
			.txt{
				font-size: 28upx;
				color: #f4f4f4;
			}
			
		}
		
		.userPortrait{

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
	}
	
	.userMainInfo{
		display: flex;
		flex-direction: column;
		align-items: center;
		line-height: 1.5;
		.number{
			font-size: 24upx;
		}
		.userName{
			font-size: 32upx;
		}
		.userDcrip{
			font-size: 28upx;
		}
		.userDcrip{
			width: 80%;
			.inp{
				font-size: 28upx;
				border-bottom: 1upx solid #FFFFFF;
				
			}
			.staticTxt{
				width: 80%;
				display: flex;
				justify-content: space-between;
				margin: auto;
			}
				
		}
	}
	.my-content{
		margin-top: 60upx;
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
