<template>
	<view class="loginPage">
		<view class="zwyHot"></view>
		<view class="loginIcon">LOGIN</view>	
		<form @submit="login" class="loginCont" >
			<input type="text" placeholder="请输入账号/手机号" placeholder-style="color:#fff" id="accountNumber">
			<input type="password" placeholder="请输入密码" placeholder-style="color:#fff" id="password">
			<button form-type="submit" class="fluLight" size="mini">LOGIN IN</button>
		</form>
		<view class="register">
			<view @click="gotoPage('./forgetPsd')">密码不见了</view>
			<view @click="gotoPage('./register')">前往注册</view>
		</view>
		
		<view class="otherLogin">
			<view>其他登陆方式,正在赶来</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			login(){
				console.log('开始登陆')
			},
			gotoPage(url){
				this.$gotoPage(url)
			}
		}
	}
</script>

<style lang="scss" scoped>
.loginPage{
	position: relative;
	display: flex;
	justify-content: center;
	color: #fff;
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
		font-size: 70upx;
		margin-top: 350upx;
	}
	.loginCont{
		position: absolute;
		top: 500upx;
		width: 80%;
		padding: 30upx;
		box-sizing: border-box;
		
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
		button{
			text-align: center;
		}
		
		
	}
	
	.register{
		position: absolute;
		top: 850upx;
		font-size: 26upx;
		display: flex;
		width: 70%;
		justify-content: space-between;
	}
	.otherLogin{
			position: absolute;
			top: 1100upx;
			font-size: 28upx;
	}
}
</style>
