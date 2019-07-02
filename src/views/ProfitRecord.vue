<template>
	<div class="profit-record page">
		<back-header></back-header>
		<header>
			<h1>
				累计收益
				<p>￥<span>{{total_prifit}}</span></p>
			</h1>
		</header>
		<van-list
			v-model='loading'
			:finished='finished'
			finished-text='没有更多了'
			@load='loadMore'>
			<ul class="record-list">
				<li class='s-b' v-for='item in list' :key='item.id'>
					<div>
						<p>{{item.remark}}</p>
						<!-- <p>拿货折扣：<span class="red">9折</span></p> -->
						<p>{{item.add_time}}</p>
					</div>
					<div>
						收益：<span class="green">{{item.money}}</span>元
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
				loading : false,
				finished : false,
				list :null,
				page :1,
				limit : 10,
				total_prifit : 0
			}
		},
		created () {
			
		},
		
		methods : {
			loadMore () {
				this.http.post('/v1/ag_account/getProfitLog',{
					page : this.page,
					limit : this.limit
				}).then(res => {
					if (res.data.log.data.length) {
						if (this.page == 1) {
							this.list = res.data.log.data;
							this.total_prifit = res.data.income;
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
