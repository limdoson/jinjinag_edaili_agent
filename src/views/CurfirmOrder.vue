<template>
	<div class="curfirm-order page">
		<back-header></back-header>
		<!-- 选择联系人 -->
		<div class="contacts">
			<div class="s-b" @click='choseAdr'>
				<div  v-if='!goods_data.adr'>选择收货人</div>
				<div v-else>
					<h1>{{goods_data.adr.name}}-{{goods_data.adr.tel}}</h1>
					<p>{{goods_data.adr.province}}{{goods_data.adr.city}}{{goods_data.adr.area}}{{goods_data.adr.adr}}</p>
				</div>
				<i class="iconfont">&#xe641;</i>
			</div>
		</div>
		<!-- 订单信息 -->
		<div class="order-info">
			<h1 class="title">订单信息</h1>
			<ul class="product-list">
				<li class='f-s' v-for='item in goods_data.goods' :key='item.id'>
					<img :src="item.img" alt="">
					<div>
						<h2>{{item.goods_name}}</h2>
						<p>
							<span class="attr">{{item.attribute_name ? item.attribute_name : ''}}</span>
						</p>
						<p class='product-des s-b'>
							<span>
								单价：<span class="red">￥{{item.price}}</span>
							</span>
							<span>
								进货数量：<span class="red">{{item.number}}</span>
							</span>
						</p>
					</div>
				</li>
			</ul>
		</div>
		<van-cell title="选择优惠券" @click='show_coupon = true' style='margin-top: 8px;' is-link>
			
		</van-cell>
		<!-- 备注信息 -->
		<div class="remark">
			<van-field v-model="remark" type='textarea' placeholder="如果需要,可输入备注信息" style='flex: 1;'/>
		</div>
		
		<!-- 底部按钮 -->
		<footer @click='show_action_sheet = true'>
			合计：￥{{goods_data.totalMoney}}(含运费：{{goods_data.freight}})，立即支付
		</footer>
		<!-- 选择地址 -->
		<van-popup v-model="show" position="bottom" :overlay="true">
			<ul class="adr-list" v-if='adr_list'>
				<li class="s-b" v-for='item in adr_list' :key='item.id' >
					<div @click='confirmChoseAdr(item)'>
						<h1>{{item.name}}-{{item.tel}}</h1>
						<p>{{item.province}}{{item.city}}{{item.area}}{{item.adr}}</p>
					</div>
					<router-link tag='i' class='iconfont' :to="'/adr-add/'+item.id">&#xe66c;</router-link>
				</li>
			</ul>
			<none v-else></none>
			<div class="btn" @click="$router.push('/adr-add')">新增地址</div>
		</van-popup>
		<!-- 选择支付方式 -->
		<van-action-sheet
			v-model="show_action_sheet"
			:actions="pay_type"
			cancel-text="取消"
			@select="onSelect"
		/>
		<!-- 优惠券选择 -->
		<van-popup v-model="show_coupon" position="bottom" :style="{ height: '70%' }">
			<ul class="coupon-list">
				<li></li>
			</ul>
		</van-popup>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				show : false,
				show_action_sheet : false,
				remark : null,
				pay_type : [
					{
						name : '微信支付',
						pay_type :1
					},
					// {
					// 	name :'支付宝支付',
					// 	pay_type :2
					// },
					{
						name : '货款支付',
						pay_type :3
					}
				],
				show_coupon :false,
				goods_data : null,//前面提交过来的数据
				adr_list : null,//用来存储用户的地址列表数据
			}
		},
		created () {
			// this.goods_data = JSON.parse(this.$route.query.data);
			// console.log(this.goods_data)
		},
		mounted () {
			this.goods_data = JSON.parse(localStorage.getItem('goods'));
		},
		methods : {
			onSelect (item) {
				if (!this.goods_data.adr) {
					this.utils.toast('请选择收货地址');
					return;
				}
				this.http.post('/v1/ag_order/createOrder',{
					adrId : this.goods_data.adr.id,
					payType : item.pay_type,
					couponId : 0,
					msg : this.remark,
					goods : JSON.stringify(this.goods_data.goods)
				}).then(res => {
					if (res.data.isWxPay) {//调用微信支付
						this.http.post('/v1/wechat/wxPay',{
							orderIds : res.data.orderId
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
					
				})
				console.log(item)
			},
			//
			//选择地址函数
			choseAdr () {
				if (!this.adr_list) {
					this.http.post('/v1/ag_agent/getAdr',{
						
					}).then(res => {
						console.log(res)
						this.adr_list = res.data;
						this.show = true;
					})
				} else {
					this.show = true;
				}
			},
			//确认选择地址
			confirmChoseAdr (item) {
				this.goods_data.adr = item;
				this.show = false;
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
<style scoped lang='less'>
	.curfirm-order {
		padding-bottom: 60px;
		.contacts {
			position: relative;
			padding: 15px 10px;
			background: #fff;
			p {
				margin-top: 10px;
				font-size: 12px;
				color: #555;
			}
		}
		.contacts::before {
			position: absolute;
			right: 0;
			bottom: 0;
			left: 0;
			height: 2px;
			background: -webkit-repeating-linear-gradient(135deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%);
			background: repeating-linear-gradient(-45deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%);
			background-size: 80px;
			content: '';
		}
		
		.title {
			padding: 10px;
			color: #555;
		}
		.order-info {
			.product-list {
				
				li {
					padding: 10px;
					background: #fff;
					border-bottom: 1px solid #fafafa;
					div {
						-webkit-flex : 1;
					}
					img {
						width: 80px;
						border-radius: 4px;
						margin-right: 15px;
					}
					h2 {
						margin-bottom: 8px;
						font-size: 14px;
						color: #888;
					}
					p {
						margin-bottom: 8px;
					}
					.product-des {
						font-size: 12px;
						color: #888;
					}
				}
				
			}
		}
		.remark {
			margin-top: 8px;
			.van-field__body {
				padding: 10px;
				font-size: 13px;
				background-color: #fafafa;
			}
		}
		footer {
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 40px;
			background: #07c160;
			text-align: center;
			color: #fff;
			line-height: 40px;
			z-index: 1;
		}
	}
	
</style>
