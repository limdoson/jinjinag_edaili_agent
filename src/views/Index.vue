<template>
	<div class="index">
		<h1 class="s-b user-info">
			<p>林杜森，你好！</p>
			<span class="agent-level">一级代理</span>
		</h1>
		<ul class="data f-s">
			<li>
				<router-link tag='div' to='/invoice-record'>
					<h1>
						<i class="iconfont">&#xe612;</i>
						300
					</h1>
					<h2>货款</h2>
					<p>用于进货</p>
				</router-link>
				<span>充值</span>
			</li>
			<li>
				<router-link tag='div' to='/profit'>
					<h1>
						<i class="iconfont">&#xe655;</i>
						300
					</h1>
					<h2>收益</h2>
					<p>可提现</p>
				</router-link>
				<router-link tag='span' to='/cash-apply'>
					提现
				</router-link>
			</li>
		</ul>
		<ul class="menu">
			<router-link tag='li' to='/index/stock-purchase'>
				<img src="../assets/img/jin_huo.png" alt="">
				<p>我要进货</p>
			</router-link>
			<router-link tag='li' to='/order'>
				<img src="../assets/img/order.png" alt="">
				<p>进货订单</p>
			</router-link>
		</ul>
		<ul class="data f-s" style="margin-top: 8px;">
			<li @click="$router.push('/invite')">
				<div>
					<h1>
						<i class="iconfont">&#xe644;</i>
						本月新增代理
					</h1>
					<h2><a class="red">0</a>人</h2>
				</div>
				<span>邀请代理</span>
			</li>
			<li @click="$router.push('/invite')">
				<div>
					<h1>
						<i class="iconfont">&#xe644;</i>
						今日新增代理
					</h1>
					<h2><a class="red">0</a>人</h2>
				</div>
				<span>邀请代理</span>
			</li>
		</ul>
		<!-- member-data -->
		<ul class="cell-menu">
			
		</ul>
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
