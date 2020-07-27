<template>
	<view class="signPage">
		<view class="signOut fluLight" @click="gotoPage('./login/login')">
			<i class='iconfont icon-zaijiannv'></i>
			<!-- <i class='iconfont icon-zaijiannan'></i> -->
			<text>退出登录</text>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
			}
		},
		methods:{
			gotoPage(url){
				this.$gotoPage(url)
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.signPage{
		.signOut{
			width: 75%;
			height: 100upx;
			background: rgba($color: #fff, $alpha: 0.5);
			border-radius: 50upx;
			margin: 100upx auto 0;
			display: flex;
			align-items: center;
			justify-content: center;
			.iconfont{
					color: #B8A390;
					font-size: 60upx;
					margin-right: 30upx;
			}
		}
		
	}
</style>
