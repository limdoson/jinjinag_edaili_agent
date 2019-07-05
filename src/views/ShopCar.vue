<template>
	<div class="shop-car">
		<ul class="shop-car-list" v-if='list'>
			<li v-for="item in list" :key='item.id' class="f-s">
				<van-checkbox v-model='item.check' checked-color='orangered' @change='sleectItem'></van-checkbox>
				<router-link tag='img' :to="'/product-detail/'+item.goods_id" :src="item.img"></router-link>
				<div class="product-info">
					<h1>{{item.goods_name}}</h1>
					<p class="attr" >{{item.attribute_name ? item.attribute_name : null}}</p>
					<div class="s-b">
						<p>
							￥<span class="price">{{item.price}}</span>
						</p>
						<van-stepper v-model="item.number" integer @change='changeNum(item)'/>
					</div>
				</div>
			</li>
			
		</ul>
		<none v-else></none>
		<footer class="s-b">
			<div class="s-b">
				<van-checkbox v-model='selected_all' checked-color='orangered' @click='selectedAll'></van-checkbox>
				<span class="total-price" style="margin-left: 10px;">
					合计：<span class="red">{{total_price}}</span>
				</span>
			</div>
			<div class="f-s">
				<van-button type="warning" @click='deleteItem'  style='border-radius: none;' >删除</van-button>
				<van-button type="danger"  style='border-radius: none;' @click='submitOrder'>提交订单</van-button>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
	
		data () {
			return {
				list :null,
				selected_all : false,//是否全选
				total_price : 0,//合计总价
				disabled : true
			}
		},
		created  () {
			this.initData();
		},
		//mounted () {},
		methods : {
			initData () {
				this.http.post('/v1/ag_cart/showCart',{
					
				}).then(res => {
					if (res.data.length) {
						this.list = res.data;
					} else {
						this.list = null
					}
					
				})
			},
			//单选某个商品
			sleectItem () {
				console.log(1)
				this.selected_all = this.list.every(item =>{
					return item.check;
				})
				this.getTotalPrice()
			},
			//全选商品
			selectedAll () {
				this.list.map(item => {
					item.check = !this.selected_all;
				})
			},
			//计步器变化
			changeNum (item) {
				
				this.http.post('/v1/ag_cart/upd',{
					id : item.id,
					number : item.number
				}).then(res => {
					this.getTotalPrice();
				})
				
			},
			//获取勾选商品的合计价格
			getTotalPrice () {
				let total = 0;
				this.list.map(item => {
					if (item.check) {
						total += item.price * item.number;
					}
				})
				this.total_price = total;
			},
			//删除购物车项
			deleteItem () {
				if (this.entablHanlde()) {
					let ids = this.list.filter(item => item.check).map(item => item.id);
					this.utils.msg('您确定删除所选数据吗？',() => {
						this.http.post('/v1/ag_cart/del',{
							id : JSON.stringify(ids)
						}).then(res => {
							this.utils.msg('删除成功',()=>{
								this.initData()
							})
						})
					})
				} else {
					this.utils.toast('请勾选要删除的商品')
				}
				
			},
			//提交订单
			submitOrder () {
				if (this.entablHanlde()) {
					this.http.post('/v1/ag_order/confirmOrder',{
						goods : JSON.stringify(this.list.filter(item => item.check))
					}).then(res => {
						localStorage.setItem('goods',JSON.stringify(res.data))
						this.$router.push({
							path : '/curfirm-order',
							// query : {
							// 	data : JSON.stringify(res.data)
							// }
						})
					})
				} else {
					this.utils.toast('请勾选要下单的商品')
				}
			},
			entablHanlde () {
				if (this.list.length) {
					let flag = this.list.some(item => {
						return item.check;
					})
					if (flag) {
						return true;
					} else {
						return false;
					}
				} else {
					return;
				}
			}
		},
		computed: {
			// disabled () {
			// 	if (this.list) {
			// 		return !this.list.some(item => {
			// 			return item.check;
			// 		})
			// 	} else {
			// 		return true;
			// 	}
			// 	
			// }
		},
		watch : {
			
		}
	}
</script>

<style lang="less">
	.shop-car {
		padding-bottom: 100px;
		.shop-car-list {
			li {
				padding: 10px;
				background: #fff;
				border-bottom: 1px solid #f1f1f1;
				img {
					width: 70px;
					height: 70px;
					margin: 0 10px;
					border-radius: 4px;
				}
				h1,p {
					margin-bottom: 6px;
					font-size: 12px;
				}
			}
			
			.product-info {
				-webkit-flex : 1;
			}
			.van-stepper__minus, .van-stepper__plus {
				width: 20px;
				height: 20px;
				font-size: 12px;
			}
			.van-stepper__input {
				border-radius: 4px;
				margin: 0 6px;
			}
			.attr {
				// border: 1px solid #ccc;
				color: #ccc;
				border-radius: 4px;
				padding: 2px;
				margin-right: 4px;
				font-size: .6rem;
			}
			.iconfont {
				margin-left: 15px;
			}
		}
		footer {
			position: fixed;
			bottom: 50px;
			width: ~"calc(100% - 10px)";
			height: 40px;
			line-height: 40px;
			background: #fff;
			padding: 0  0 0 10px;
			ul {
				width: 180px;
				li {
					width: 50%;
					text-align: center;
					&:nth-of-type(2) {
						background: orangered;
						color: #fff;
						font-size: 14px;
					}
				}
			}
		}
	}
</style>
