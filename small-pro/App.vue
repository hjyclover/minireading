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
</style>
