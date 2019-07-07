<template>
	<div class="order">
		<back-header></back-header>
		<van-tabs v-model="active" class='tab' @click='tabClick'>
			<van-tab title="待付款"></van-tab>
			<van-tab title="待发货"></van-tab>
			<van-tab title="待收货"></van-tab>
			<van-tab title="已完成"></van-tab>
			<van-tab title="已取消"></van-tab>
		</van-tabs>
		<ul class="order-list">
			<li v-for='item in list' :key='item.id'>
				<h1 class=''>
					订单编号：{{item.ind}}
				</h1>
				<dl class="s-b" v-for='product in item.goods' :key='product.name'>
					<dt>
						<img :src="product.img" alt="">
					</dt>
					<dd>
						<h2>{{product.name}}（{{product.attribute_name}}）</h2>
						<p>
							<span>
								拿货价：<span class="red">￥{{product.price}}</span>
							</span>
							<span>
								数量：<span class="red">{{product.num}}</span>
							</span>
							
						</p>
						<p>
							<span>
								总价：<span class="red">￥{{product.totalPrice}}</span>
							</span>
						</p>
					</dd>
				</dl>
				<div class="s-b">
					<span>{{item.pay_time}}</span>
					<span>供{{item.totalNum}}件商品，合计：<span class="red">￥{{item.pay_amount}}</span></span>
				</div>
				<div class="btns">
					<span v-if='item.status == 0' @click='payOrder(item)'>支付订单</span>
					<span v-if='item.status == 0' @click='cancelOrder(item.id)'>取消订单</span>
					<!-- <span v-if='item.status == 1'>查看物流</span> -->
					<span v-if='item.status == 2' @click='confirmReceive(item.id)'>确认收货</span>
				</div>
			</li>
		</ul>
		<p v-if='list && !finish' class="load-more" @click='loadMore'>--- 查看更多 ---</p>
		<none v-if='!list'></none>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				tab : [
					'待付款','待发货','待收货','已完成','已取消'
				],
				active : 0,
				list : null,
				limit : 10,
				page :1,
				finish : false,
			}
		},
		created () {
			this.initData();
		},
		
		methods : {
			initData(){
				this.http.post('/v1/ag_order/getAll',{
					page : this.page,
					limit : this.limit,
					status : this.active + 1
				}).then(res => {
					if (this.page > 1) {
						if (res.data) {
							this.list = this.list.concat(res.data.data)
						} else {
							this.utils.toast('没有更多了');
							this.finish = true;
						}
					} else {
						this.finish = false;
						this.list = res.data.data;
					}
					// this.list = res.data.data;
					// console.log(res)
				})
			},
			tabClick(active) {
				this.page = 1;
				this.initData();
			},
			//确认收货
			confirmReceive(id) {
				this.http.post('/v1/ag_order/confirm',{
					id : id
				}).then(res=>{
					this.utils.toast(res.msg);
					this.initData();
					
				})
			},
			//取消订单
			cancelOrder (id) {
				this.http.post('/v1/ag_order/cancel',{
					id : id
				}).then(res => {
					this.utils.toast(res.msg);
					this.initData();
				})
			},
			//loadMore
			loadMore () {
				this.page ++;
				this.initData();
			},
			//支付订单
			payOrder (item) {
				let me = this;
				if (item.pay_type == 1) {//微信支付
					this.http.post('/v1/wechat/wxPay',{
						orderIds : JSON.stringify([item.id])
					}).then(pay_data => {
						wx.chooseWXPay({
							timestamp : pay_data.data.timestamp,
							appId : pay_data.data.appId,
							nonceStr : pay_data.data.nonceStr,
							package : pay_data.data.package,
							signType : pay_data.data.signType,
							paySign : pay_data.data.paySign,
							success : pay => {
								localStorage.removeItem('goods')
								me.$router.replace('/pay-success')
							},
							fail : err => {
								
							}
						})
					})
				} 
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
