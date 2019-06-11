<template>
	<div class="invite-page page">
		<back-header></back-header>
		<div class="qr-code">
			<img src="http://qr.liantu.com/api.php?text=http://mgw.xmrrg.com/wsy/test-tel.php?id=205" alt="">
			<p>请让被邀请者扫描上面二维码或点击右上角发送给被邀请者即可</p>
		</div>
		<div class="btn" @click='show_mask = true;'>
			邀请代理
		</div>
		<p class="tips">
			该链接将于<span class="red">1</span>天内失效
		</p>
		<!-- 蒙版层 -->
		<dis class="mask" v-if='show_mask' @click='show_mask = false;'>
			<img src="../assets/img/share.png" alt="">
		</dis>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				show_mask : false,
			}
		},
		created () {
			
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
