<template>
	<div class="invoice-record page">
		<back-header></back-header>
		<header class='record-header'>
			<h1>
				总充值
				<p>￥{{income}}</p>
			</h1>
			<h2>
				总消费
				<p>￥{{expend}}</p>
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
						<p v-if="active == 0">货款充值<span class="red">￥{{item.money}}</span>元</p>
						<p v-else>订单编号：<span class="red">{{item.ind}}，</span>进货<span class="red">{{item.money}}元</span></p>
						<p>{{item.add_time}}</p>
					</div>
					<div>
						{{item.remark}}
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
				income : 0,
				expend : 0,
				loading : false,
				finished :false,
				
				list : null,
				page :1,
				limit : 20,
				type :1
			}
		},
		created () {
			
		},
		
		methods : {
			loadMore () {
				this.http.post('/v1/ag_account/getPurchaseLog',{
					limit : this.limit,
					page : this.page,
					type : this.active +1
				}).then(res => {
					let data = res.data.log.data;
					if (data.length) {
						if (this.page == 1) {
							this.income = res.data.income;
							this.expend = res.data.expend;
							this.list = data;
						} else {
							this.list = this.list.concat(data)
						}
						this.page ++;
						this.loading = false;
						this.finished = false;
					} else {
						this.loading = false;
						this.finished = true;
					}
				})
			}
		},
		watch :{
			'active' () {
				this.page = 1;
				this.list = null;
				this.finished = false;
				this.loadMore()
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
