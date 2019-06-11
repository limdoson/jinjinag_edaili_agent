<template>
	<div class="shop-car">
		<ul class="shop-car-list">
			<li v-for="item in list" :key='item.id' class="s-b">
				<van-checkbox v-model="item.checked" checked-color='orangered'></van-checkbox>
				<img src="https://img.alicdn.com/imgextra/i2/3208450429/TB2Gpy2weuSBuNjSsziXXbq8pXa_!!3208450429-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp" alt="">
				<div class="info">
					<h1>商品名称</h1>
					<p>
						<span class="attr">规格1</span>
						<span class="attr">规格2</span>
					</p>
					<p class="s-b">
						<span class="red">￥1</span>
						<van-stepper v-model="item.number" />
					</p>
				</div>
				<i class="iconfont">&#xe614;</i>
			</li>
		</ul>
		<footer class="s-b">
			<van-checkbox v-model="checked_all" checked-color='orangered'>全选</van-checkbox>
			<ul class='f-s'>
				<li>
					合计：<span class="red">￥100</span>
				</li>
				<li>
					提交订单
				</li>
			</ul>
		</footer>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				checked_all :false,
				list: [
					{
						id :1,
						checked : false,
						number : 1
					}
				],
			}
		},
		created () {
			
		},
		
		methods : {
			onSubmit () {
				
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
