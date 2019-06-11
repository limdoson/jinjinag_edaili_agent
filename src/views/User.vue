<template>
	<div class="user">
		<header class="s-b">
			<div class="f-s">
				<img src="../assets/img/logo.png" alt="">
				<div>
					<h1>
						林杜森
						<span class="agent-level">一级代理</span>
					</h1>
					<p>15960209969</p>
				</div>
			</div>
			<div>
				设置
				<i class="iconfont">&#xe641;</i>
			</div>
		</header>
		<ul class="cell-menu">
			<router-link tag='li' to='/adr-manage'>
				<div>
					<i class="iconfont" style="color: deepskyblue;">&#xe6d9;</i>
					收货地址管理
				</div>
				
				<div>
					
					<i class="iconfont">&#xe641;</i>
				</div>
			</router-link>
			<router-link tag='li' to='/my-team'>
				<div>
					<i class="iconfont" style="color: deepskyblue;">&#xe644;</i>
					我的代理团队
				</div>
				
				<div>
					<span class="red">0</span>人
					<i class="iconfont">&#xe641;</i>
				</div>
			</router-link>
			<router-link tag='li' to='/order'>
				<div>
					<i class="iconfont" style="color: deepskyblue;">&#xe636;</i>
					我的进订单
				</div>
				<div>
					<i class="iconfont">&#xe641;</i>
				</div>
			</router-link>
			<router-link tag='li' to='/purchase-history'>
				<div>
					<i class="iconfont" style="color: deepskyblue;">&#xe633;</i>
					历史进货数据
				</div>
				<div>
					<i class="iconfont">&#xe641;</i>
				</div>
			</router-link>
			<router-link tag='li' to='/invoice-record'>
				<div>
					<i class="iconfont" style="color: deepskyblue;">&#xe612;</i>
					货款记录
				</div>
				<div>
					<i class="iconfont">&#xe641;</i>
				</div>
			</router-link>
			<router-link tag='li' to='/profit'>
				<div>
					<i class="iconfont" style="color: deepskyblue;">&#xe655;</i>
					我的收益
				</div>
				<div>
					<i class="iconfont">&#xe641;</i>
				</div>
			</router-link>
			
		</ul>
		<div class="btn">退出登录</div>
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
