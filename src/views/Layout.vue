<template>
	<div class="layout">
		<router-view></router-view>
		<van-tabbar 
			v-model="active" 
			active-color='orangered' 
			route
			@change='changeTab'>
			<van-tabbar-item icon="home-o" to='/index' name='home'>首页</van-tabbar-item>
			<van-tabbar-item icon="apps-o" to='/index/stock-purchase' name='stock-purchase'>我要进货</van-tabbar-item>
			<van-tabbar-item icon="shopping-cart-o" to='/index/shop-car' name='stock-purchase'>购物车</van-tabbar-item>
			<van-tabbar-item icon="manager-o" to='/index/user' name='user'>我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
	export default {
		components : {},
		data () {
			return {
				active : 'home',
			}
		},
		created  () {
			
		},
		//mounted () {},
		methods : {
			changeTab (active) {
				this.active = active;
			}
		}
	}
</script>