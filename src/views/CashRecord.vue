<template>
	<div class="cash-record page">
		<back-header></back-header>
		<header>
			<h1>
				提现中
				<p>￥0</p>
			</h1>
			<h2>
				已提现
				<p>￥0</p>
			</h2>
		</header>
		<van-tabs v-model="active">
			<van-tab title="申请中"></van-tab>
			<van-tab title="已提现"></van-tab>
			<van-tab title="被驳回"></van-tab>
		</van-tabs>
		<van-list
			v-model='loading'
			:finished='finished'
			finished-text='没有更多了'
			@load='loadMore'>
			<ul class="record-list">
				<li class="s-b" v-for="(item,index) in list" :key='index'>
					<div>
						<p>申请收益提现<span class="red">￥{{item.money}}</span>元</p>
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
						time : '2018-08-08',
						status :'申请中'
					},{
						money : 10,
						time : '2018-08-08',
						status :'申请中'
					},{
						money : 10,
						time : '2018-08-08',
						status :'申请中'
					}
				]
			}
		},
		created () {
			
		},
		
		methods : {
			loadMore () {}
		},
		watch : {
			'active' (n,o) {
				switch (n){
					case 0:
						this.list = [
								{
									money : 10,
									time : '2018-08-08',
									status :'申请中'
								},{
									money : 10,
									time : '2018-08-08',
									status :'申请中'
								},{
									money : 10,
									time : '2018-08-08',
									status :'申请中'
								}
							]
						break;
					case 1:
						this.list = [
								{
									money : 10,
									time : '2018-08-08',
									status :'已提现'
								},{
									money : 10,
									time : '2018-08-08',
									status :'已提现'
								},{
									money : 10,
									time : '2018-08-08',
									status :'已提现'
								}
							]
						break;
					case 2:
						this.list = [
								{
									money : 10,
									time : '2018-08-08',
									status :'被驳回'
								},{
									money : 10,
									time : '2018-08-08',
									status :'被驳回'
								},{
									money : 10,
									time : '2018-08-08',
									status :'被驳回'
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
