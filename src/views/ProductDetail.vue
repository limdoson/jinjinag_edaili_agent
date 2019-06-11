<template>
	<div class="product-detail page">
		<back-header></back-header>
		<!-- 轮播图 -->
		<swiper :options='options'>
			<swiper-slide>
				<img src="https://img.alicdn.com/tfs/TB1Jgk2bqWs3KVjSZFxXXaWUXXa-520-280.jpg_q90_.webp" alt="">
			</swiper-slide>
			<swiper-slide>
				<img src="https://img.alicdn.com/tfs/TB1Jgk2bqWs3KVjSZFxXXaWUXXa-520-280.jpg_q90_.webp" alt="">
			</swiper-slide>
			<swiper-slide>
				<img src="https://img.alicdn.com/tfs/TB1Jgk2bqWs3KVjSZFxXXaWUXXa-520-280.jpg_q90_.webp" alt="">
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<!-- 商品信息 -->
		<div class="product-info">
			<h1>商品名称</h1>
			<dl class="s-b">
				<dt>
					<i class="iconfont"></i>
					<span class="red">￥100</span>
				</dt>
				<dt>
					<i class="iconfont">&#xe61e;</i>
					销量：10000
				</dt>
				<dt>
					<i class="iconfont">&#xe608;</i>
					库存：10000
				</dt>
			</dl>
		</div>
		<!-- 商品详情 -->
		<div class="product-img-detail">
			<h1>———— 商品详情 ————</h1>
			<img src="https://img.alicdn.com/tfs/TB1Jgk2bqWs3KVjSZFxXXaWUXXa-520-280.jpg_q90_.webp" alt="">
			<img src="https://img.alicdn.com/tfs/TB1Jgk2bqWs3KVjSZFxXXaWUXXa-520-280.jpg_q90_.webp" alt="">
			<img src="https://img.alicdn.com/tfs/TB1Jgk2bqWs3KVjSZFxXXaWUXXa-520-280.jpg_q90_.webp" alt="">
			<img src="https://img.alicdn.com/tfs/TB1Jgk2bqWs3KVjSZFxXXaWUXXa-520-280.jpg_q90_.webp" alt="">
			<img src="https://img.alicdn.com/tfs/TB1Jgk2bqWs3KVjSZFxXXaWUXXa-520-280.jpg_q90_.webp" alt="">
		</div>
		<!-- 底部导航 -->
		<van-goods-action>
			<van-goods-action-icon
				icon="chat-o"
				text="客服"
				@click="onClickIcon"
			/>
			<van-goods-action-icon
				icon="cart-o"
				text="购物车"
				@click="$router.push('/index/shop-car')"
			/>
			<van-goods-action-button
				type="warning"
				text="加入购物车"
				@click="onClickButton"
			/>
			<van-goods-action-button
				type="danger"
				text="立即购买"
				@click="$router.push('/curfirm-order')"
			/>
		</van-goods-action>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				options :{
					loop: true,
					pagination: {
						el: '.swiper-pagination',
					},
					observer:true,
					observeParents : true,
				}
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
<style lang="less" scoped>
	.product-detail {
		padding-bottom: 80px;
		.product-info {
			padding: 10px;
			background: #fff;
			h1 {
				margin-bottom: 8px;
				font-size: 14px;
				font-weight: bold;
			}
			dl {
				.red {
					font-weight: bold;
					font-size: 15px;
				}
				color: #555;
				.iconfont {
					font-size: 13px;
				}
			}
		}
		.product-img-detail  {
			h1 {
				margin: 15px 0;
				color: #ccc;
				text-align: center;
			}
			img {
				display: block;
			}
		}
	}
	
</style>
