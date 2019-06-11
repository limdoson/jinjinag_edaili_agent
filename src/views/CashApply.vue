<template>
	<div class="cash-apply page">
		<back-header></back-header>
		<header>
			<p class="tips">最小提现金额：<span class="red">1</span>元，最大提现金额<span class="red">500</span>元，提现手续费<span class="red">0%</span></p>
		</header>
		<van-cell-group>
			<van-field v-model="money" type='number' label='提现金额' placeholder='请输入提现金额'></van-field>
		</van-cell-group>
		<div class="btn">提现</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				money : null,
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
