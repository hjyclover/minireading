<script>
	export default {
		methods:{
			getPhoneInfo: function(){
				plus.device.getInfo({
				        success:function(e){
				            console.log('getDeviceInfo success: '+JSON.stringify(e));
				        },
				        fail:function(e){
				            console.log('getDeviceInfo failed: '+JSON.stringify(e));
				        }
				    });
			},  
		},
		onLaunch: function() {
			console.log('App Launch')
			// this.getPhoneInfo() 
			
		},
		
		globalData:{
			systemInfo: uni.getSystemInfoSync()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script> 

<style>
	@import url("./static/font/iconfont.css");
	/*每个页面公共css */
	.app,body{
		width: 100%;
		height: 100%;
		font-size: 16px;
		background: #F5B4D2;
	}
	.flexbox{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.cricleIcon{
		display: inline-block;
		width: 20upx;
		height: 20upx;
		border-radius: 50%;
	}
	.textellipsis{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.txt3Ellipsis{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: wrap;
	}
	::-webkit-scrollbar {display:none}
	
	/* 头像大小 */
	.my-cont-userPro {
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
	}
	
	/* 外闪效果 */
	.zwyHover2 {
		z-index: 999;
		position: relative;
		--color:#ff0081;
		--count:infinite;
	}
	
	.zwyHover2::before,
	.zwyHover2::after {
		position: absolute;
		content: '';
		display: block;
		width: 140%;
		height: 100%;
		left: -20%;
		z-index: -1000;
		transition: all ease-in-out 0.5s;
		background-repeat: no-repeat;
	}
	
	.zwyHover2::before {
		top: -55%;
		background-image: radial-gradient(circle, var(--color) 20%, transparent 20%), 
											radial-gradient(circle, transparent 20%, var(--color) 20%, transparent 30%), 
											radial-gradient(circle, var(--color) 20%, transparent 20%), 
											radial-gradient(circle, var(--color) 20%, transparent 20%), 
											radial-gradient(circle, transparent 10%, var(--color) 15%, transparent 20%), 
											radial-gradient(circle, var(--color) 20%, transparent 20%), 
											radial-gradient(circle, var(--color) 20%, transparent 20%), 
											radial-gradient(circle, var(--color) 20%, transparent 20%), 
											radial-gradient(circle, var(--color) 20%, transparent 20%);
		background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
		animation: topBubbles ease-in-out 0.75s var(--count);
		display: block;
	}
	
	.zwyHover2::after {
		bottom: -55%;
		background-image: radial-gradient(circle, var(--color) 20%, transparent 20%), 
											radial-gradient(circle, var(--color) 20%, transparent 20%), 
											radial-gradient(circle, transparent 10%, var(--color) 15%, transparent 20%), 
											radial-gradient(circle, var(--color) 20%, transparent 20%), 
											radial-gradient(circle, var(--color) 20%, transparent 20%), 
											radial-gradient(circle, var(--color) 20%, transparent 20%), 
											radial-gradient(circle, var(--color) 20%, transparent 20%);
		background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
		display: block;
		animation: bottomBubbles ease-in-out 0.75s var(--count);
	}
	
	@keyframes topBubbles {
		0% {
			background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
			background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
		}
	
		50% {
			background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
			background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
		}
	
		100%{
			background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
			background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
		}
	}
	@keyframes bottomBubbles {
		0% {
			background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
			background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
		}
	
		50% {
			background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
			background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
		}
	
		100%{
			background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
			background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
		}
	}
	
	/* 流光效果 */
	@keyframes fluLight{
		100% {
		    background-position: right -40px top 0px;
		}
	}
	.fluLight{
		position: relative;
		overflow: hidden;
	}
	.fluLight::before{
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
		background-size: 40px 100%;
		background-repeat: no-repeat;
		background-position: left -40px top 0;
		animation: fluLight 1s ease infinite;
	}
	/* 添加黑色波纹 */
	
	.zwyHot {
		position: relative;
		--color:rgba(0, 0, 0, 0.15);
	}
	
	.zwyHot::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		border-radius: 50%;
		animation: shockwave 3s 0.5s ease-out infinite;
	}
	
	.zwyHot::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		border-radius: 50%;
		animation: shockwave 3s 0.65s ease-out infinite;
	}
	@keyframes shockwave {
		0% {
			-webkit-transform: scale(1);
			transform: scale(1);
			box-shadow: 0 0 2px var(--color), inset 0 0 1px var(--color);
			opacity: 1;
		}
	
		95% {
			box-shadow: 0 0 50px var(--color), inset 0 0 30px var(--color);
			opacity: 0;
		}
	
		100% {
			-webkit-transform: scale(2.25);
			transform: scale(2.25);
			opacity: 0;
		}
	}
</style>
