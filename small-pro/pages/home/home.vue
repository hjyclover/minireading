<template>
	<view class="app">
		<minilist :lists="lists"></minilist>
	</view>
</template>

<script>
	import miniList from '@/components/mini-list/mini-list.vue'
	export default {
		components:{
			"minilist":miniList
		},
		data() {
			return {
				lists:[
					{
						id:0,
						userPro:'../../static/image/my/aaas.jpg',
						userName:"妖怡半生烟雨半城殇",
						postTime:"2019-8-19 15:40",
						contTitle:"真的好辛苦,辛苦",
						contTxt:"8月17日消息，近日，有媒体报道苹果公司将于9月10日举办2019年新款iPhone发布会，随后将于9月20日在全球推出。根据TheElec最新的一份报告显示，2019.....",
						articlePic:"../../static/image/my/aaas.jpg",
						likes:666,
						discuss:555
					},
					{
						id:1,
						userPro:'../../static/image/my/aaas.jpg',
						userName:"萝莉小萌",
						postTime:"2019-8-19 15:40",
						contTitle:"辛壮娇",
						contTxt:"人生好好坏坏,就是这样的,不要太介意",
						articlePic:"../../static/image/my/aaas.jpg",
						likes:666,
						discuss:555
					}
				]
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
