<template>
	<div class="order">
		<back-header></back-header>
		<ul class="tab s-a">
			<li 
				v-for='(item,index) in tab' 
				:key='index'
				:class="active == index ? 'active' : ''"
				@click='tabFn(index)'> {{item}}</li>
		</ul>
		<ul class="order-list">
			<li>
				<h1 class=''>
					订单编号：10010101
				</h1>
				<dl class="s-b">
					<dt>
						<img src="../assets/img/logo.png" alt="">
					</dt>
					<dd>
						<h2>商品名称</h2>
						<p>
							<span>
								拿货价：<span class="red">￥1</span>
							</span>
							<span>
								数量：<span class="red">1</span>
							</span>
							<span>
								总价：<span class="red">￥1</span>
							</span>
						</p>
					</dd>
				</dl>
				<dl class="s-b">
					<dt>
						<img src="../assets/img/logo.png" alt="">
					</dt>
					<dd>
						<h2>商品名称</h2>
						<p>
							<span>
								拿货价：<span class="red">￥1</span>
							</span>
							<span>
								数量：<span class="red">1</span>
							</span>
							<span>
								总价：<span class="red">￥1</span>
							</span>
						</p>
					</dd>
				</dl>
				<div class="s-b">
					<span>2018-08-08</span>
					<span>供2件商品，合计：<span class="red">￥10</span></span>
				</div>
				<div class="btns">
					<span>确认收货</span>
					<span>查看物流</span>
					<span>取消订单</span>
				</div>
			</li>
			<li>
				<h1>订单编号：10010101</h1>
				<dl class="s-b">
					<dt>
						<img src="../assets/img/logo.png" alt="">
					</dt>
					<dd>
						<h2>商品名称</h2>
						<p>
							<span>
								拿货价：<span class="red">￥1</span>
							</span>
							<span>
								数量：<span class="red">1</span>
							</span>
							<span>
								总价：<span class="red">￥1</span>
							</span>
						</p>
					</dd>
				</dl>
				<dl class="s-b">
					<dt>
						<img src="../assets/img/logo.png" alt="">
					</dt>
					<dd>
						<h2>商品名称</h2>
						<p>
							<span>
								拿货价：<span class="red">￥1</span>
							</span>
							<span>
								数量：<span class="red">1</span>
							</span>
							<span>
								总价：<span class="red">￥1</span>
							</span>
						</p>
					</dd>
				</dl>
				<div class="btns">
					<span>确认收货</span>
					<span>查看物流</span>
					<span>取消订单</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				tab : [
					'待付款','待发货','待收货','已完成','已取消'
				],
				active : 0
			}
		},
		created () {
			
		},
		
		methods : {
			tabFn(index) {
				this.active = index;
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
