<template>
	<div class="purchase-history page">
		<back-header></back-header>
		<header>
			累计进货金额
			<p>￥{{total}}</p>
		</header>
		<van-list
			v-model="loading"
			:finished="finished"
			finished-text="没有更多了"
			@load="onLoad"
		>
			<ul class="record-list">
				<li class='s-b' v-for='item in list' :key='item.id'>
					<div>
						{{item.addTime}}
					</div>
					<div class="red">
						进货￥{{item.totalMoney}}
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
				loading :false,
				finished : false,
				list : null,
				page : 1,
				limit :50,
				total : 0
			}
		},
		created () {
			
		},
		
		methods : {
			onLoad () {
				this.http.post('/v1/ag_order/getLog',{
					limit : this.limit,
					page : this.page
				}).then(res => {
					this.loading = false;
					//判断是否有数据
					if (res.data) {
						if (this.page == 1) {
							this.list = res.data.list.data;
							this.total = res.data.totalPrice;
						} else {
							this.list = this.list.concat(res.data.list.data);
						}
						this.page ++;
					} else {
						this.finished = true;
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
