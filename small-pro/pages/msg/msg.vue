<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
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

<style>

</style>
