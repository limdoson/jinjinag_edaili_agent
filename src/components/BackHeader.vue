<template>
	<div class="back-header">
		<van-nav-bar 
			:title="$route.meta.title" 
			left-text="返回" 
			left-arrow
			@click-left='$router.back()'>
			
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
