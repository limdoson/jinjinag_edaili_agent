<template>
	<div class="invite-page page">
		<back-header></back-header>
		<div class="qr-code">
			<img :src="qr_code" alt="">
			<p>请让被邀请者扫描上面二维码或点击右上角发送给被邀请者即可</p>
		</div>
		<div class="btn" @click='show_mask = true;'>
			邀请代理
		</div>
		<!-- <p class="tips">
			该链接将于<span class="red">1</span>天内失效
		</p> -->
		<!-- 蒙版层 -->
		<dis class="mask" v-if='show_mask' @click='show_mask = false;'>
			<img :src="qr_code" alt="">
		</dis>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				show_mask : false,
				qr_code : null,//二维码链接
			}
		},
		created () {
			this.http.post('/v1/ag_agent/createQrCode',{
				level : this.$route.params.level
			}).then(res => {
				this.qr_code = res.data.qrUrl;
				
			})
		},
		
		methods : {
			
		},
		//mounted () {},
		// watch () {
		// 	a (n,o) {
		// 		
		// 	}
		// },
		// computed () {
		// 	a () {
		// 		return this.a
		// 	}
		// },
	}
</script>
