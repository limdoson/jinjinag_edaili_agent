<template>
	<div class="profit page">
		<back-header></back-header>
		<header>
			<h1>￥<span>{{profit}}</span></h1>
			<p>收益余额</p>
		</header>
		<ul class="cell">
			<router-link tag='li' to='/profit-record'>
				<div >
					<i class="iconfont" style="color: blue;">&#xe636;</i>
					收益账单
				</div>
				<div>
					<i class="iconfont">&#xe641;</i>
				</div>
			</router-link>
			<router-link tag='li' to='/cash-record'>
				<div>
					<i class="iconfont" style="color: green;">&#xe619;</i>
					提现记录
				</div>
				<div>
					<i class="iconfont">&#xe641;</i>
				</div>
			</router-link>
		</ul>
		<div class="btn" @click="$router.push('/cash-apply')">
			申请提现
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				profit : 0,
			}
		},
		created () {
			this.http.post('/v1/ag_account/getProfit',{
				
			}).then(res => {
				this.profit = res.data;
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
