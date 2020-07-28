<template>
	<view class="registerPage">
		<view class="zwyHot"></view>
		<view class="loginIcon">REGISTER</view>	
		<form @submit="register" class="registerBox">
			<input type="text" placeholder="请输入昵称" placeholder-class="holdColor" />
			<input type="text" placeholder="请输入电话号码"  placeholder-class="holdColor"/>
			<input type="text" placeholder="请输入密码"  placeholder-class="holdColor"/>
			<!-- <input type="text" placeholder="请输入验证码"> -->
			<button form-type="submit" class="fluLight" size="mini">注册</button>
		</form>
		<view @click="gotoPage('./login')" class="gotoLogin">已有账号,前往登陆</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			register(){
				console.log('开始注册')
			},
			gotoPage(url){
				this.$gotoPage(url)
			}
			
		}
		
	}
</script>

<style lang="scss">
.registerPage{
	color: #FFFFFF;
	display: flex;
	justify-content: center;
	position: relative;
	&::before{
		content: "mini";
		width: 250upx;
		height: 250upx;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1upx solid #F6F6F6;
		border-radius: 50%;
		font-size: 100upx;
		color: rgba(255,255,255,0.8);
		position: absolute;
		z-index: -1;
		top: 100upx;
	}
	.zwyHot{
		width: 250upx;
		height: 250upx;
		position: absolute;
		z-index: -1;
		border: 1upx solid #F6F6F6;
		border-radius: 50%;
		top: 100upx;
	}
	.loginIcon{
		position: absolute;
		top: 350upx;
		font-size: 70upx;
	}
	.registerBox{
		margin-top: 480upx;
		width: 80%;
		
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
		
	}
	.gotoLogin{
		position: absolute;
		top: 900upx;
		right: 10%;
		font-size: 28upx;
	}
	
	
}
</style>
