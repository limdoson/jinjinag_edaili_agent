<template>
	<div class="back-header">
		<van-nav-bar 
			:title="$route.meta.title" 
			left-text="返回" 
			left-arrow
			@click-left='backHandle'>
			
		</van-nav-bar>
	</div>
	
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				
			}
		},
		created () {
			
		},
		
		methods : {
			backHandle () {
				if (localStorage.getItem('goods')) {
					localStorage.removeItem('goods')
				}
				if (history.length >= 1) {
					this.$router.back();
				} else {
					this.$router.push('/')
				}
			}
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
