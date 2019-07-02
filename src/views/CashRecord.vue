<template>
	<div class="cash-record page">
		<back-header></back-header>
		<header>
			<h1>
				提现中
				<p>￥{{wait}}</p>
			</h1>
			<h2>
				已提现
				<p>￥{{end}}</p>
			</h2>
		</header>
		<van-list
			v-model='loading'
			:finished='finished'
			finished-text='没有更多了'
			@load='loadMore'>
			<ul class="record-list">
				<li class="s-b" v-for="(item,index) in list" :key='index'>
					<div>
						<p>申请收益提现<span class="red">￥{{item.money}}</span>元</p>
						<p>
							<span v-if='item.status == 0'   class="red">待审核</span>
							<span v-if='item.status == 1'  class="red">已完成</span>
							<span v-if='item.status == 2' class="red">被驳回</span>
							<span v-if='item.status == 3' class="red">用户取消</span>
						</p>
						<p>{{item.add_time}}</p>
					</div>
					<div @click='cancleApply(item.id)'>
						<span v-if='item.status == 0' >取消提现</span>
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
				wait : 0,//待审核提现金额
				end : 0,//已完成提现金额
				list : null,
				page :1,
				limit : 10
			}
		},
		created () {
			
		},
		
		methods : {
			loadMore () {
				this.http.post('/v1/ag_account/getCashLog',{
					page : this.page,
					limit : this.limit
				}).then(res => {
					if (res.data.log.data.length) {
						if (this.page == 1) {
							this.list = res.data.log.data;
							this.total_prifit = res.data.income;
							this.wait = res.data.wait;
							this.end = res.data.end;
						} else {
							
							this.list = this.list.concat(res.data.log.data);
						}
						this.page ++;
						this.finished = false;
						this.loading = false;
					} else {
						this.finished = true;
						this.loading = false;
					}
				})
			},
			cancleApply (id) {
				this.http.post('/v1/ag_account/cancelCash',{
					id : id
				}).then(res => {
					this.utils.toast(res.msg)
					this.page = 1;
					this.loadMore();
				})
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
