<template>
	<div class="invoice-record page">
		<back-header></back-header>
		<header class='record-header'>
			<h1>
				总充值
				<p>￥0</p>
			</h1>
			<h2>
				总消费
				<p>￥0</p>
			</h2>
		</header>
		<van-tabs v-model="active">
			<van-tab title="充值记录"></van-tab>
			<van-tab title="消费记录"></van-tab>
		</van-tabs>
		<van-list
			v-model='loading'
			:finished='finished'
			finished-text='没有更多了'
			@load='loadMore'>
			<ul class="record-list">
				<li class="s-b" v-for="(item,index) in list" :key='index'>
					<div>
						<p v-if="item.sta == 0">货款充值<span class="red">￥1000</span>元</p>
						<p v-else>订单编号：<span class="red">{{item.order_ind}}，</span>进货<span class="red">{{item.money}}元</span></p>
						<p>{{item.time}}</p>
					</div>
					<div>
						{{item.status}}
					</div>
				</li>
			</ul>
		</van-list>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				active : 0,
				loading : false,
				finished :false,
				
				list : [
					{
						money : 10,
						order_ind : 11,
						time : '2018-08-08',
						status :'线上充值'
					},{
						money : 10,
						order_ind : 11,
						time : '2018-08-08',
						status :'管理员充值'
					},{
						money : 10,
						order_ind : 11,
						time : '2018-08-08',
						status :'线上充值'
					}
				]
			}
		},
		created () {
			
		},
		
		methods : {
			loadMore () {}
		},
		watch :{
			'active' (n,o) {
				switch (n){
					case 0:
						this.list = [
							{
								money : 10,
								time : '2018-08-08',
								sta : 0,
								status :'线上充值'
							},{
								money : 10,
								time : '2018-08-08',
								sta : 0,
								status :'管理员充值'
							},{
								money : 10,
								time : '2018-08-08',
								sta : 0,
								status :'线上充值'
							}
						]
						break;
					case 1:
						this.list =  [
							{
								money : 10,
								order_ind : 1000025454,
								time : '2018-08-08',
								sta : 1,
								status :'进货支付'
							},{
								money : 10,
								order_ind : 1000025454,
								time : '2018-08-08',
								sta : 1,
								status :'进货支付'
							},{
								money : 10,
								order_ind : 1000025454,
								time : '2018-08-08',
								sta : 1,
								status :'进货支付'
							}
						]
						break;
				}
			}
		}
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
