<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
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
	/*每个页面公共css */
	.app,body{
		width: 100%;
		height: 100%;
		background: #F5B4D2;
		background-image: linear-gradient(rgb(245,180,210),rgb(247,196,215)); 
	}
	.flexbox{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
