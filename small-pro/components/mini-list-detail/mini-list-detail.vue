<template>
	<view class="miniListDetail">
		<view>
			<view class="my-cont-item-head" @click="contUserInfo(item.id)">
				<!-- <image :src="item.userPro" mode="widthFix" class="my-cont-userPro"></image> -->
				<view class="my-cont-userInfo">
					<text class="my-cont-userName">4646</text>
					<text class="postTime">464+64</text>
				</view>
			</view>
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
			contUserInfo(id){
				var usrId = id
				uni.navigateTo({
					url:"../../pages/profile/profile"
				})
			}
		}
	}
</script>

<style>

</style>
