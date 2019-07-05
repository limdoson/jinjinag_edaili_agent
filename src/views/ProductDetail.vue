<template>
	<div class="product-detail page" v-if='product'>
		<back-header></back-header>
		<!-- 轮播图 -->
		<swiper :options='options'>
			<swiper-slide v-for='item in product.img' :key='item'>
				<img :src="item" alt="">
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<!-- 商品信息 -->
		<div class="product-info">
			<h1>{{product.name}}</h1>
			<dl class="s-b">
				<dt>
					<i class="iconfont"></i>
					<span class="red">￥{{product.price}}</span>
				</dt>
				<dt>
					<i class="iconfont">&#xe61e;</i>
					销量：{{product.fake_sale}}
				</dt>
				<dt>
					<i class="iconfont">&#xe608;</i>
					库存：{{product.stock}}
				</dt>
			</dl>
		</div>
		<!-- 商品详情 -->
		<div class="product-img-detail">
			<h1>———— 商品详情 ————</h1>
			<div v-html='product.content'></div>
		</div>
		<!-- 底部导航 -->
		<van-goods-action>
			<van-goods-action-icon
				icon="chat-o"
				text="客服"
				@click="onClickIcon"
			/>
			<van-goods-action-icon
				icon="cart-o"
				text="购物车"
				@click="$router.push('/index/shop-car')"
			/>
			<van-goods-action-button
				type="warning"
				text="加入购物车"
				@click="joinShopCar"
			/>
			<van-goods-action-button
				type="danger"
				text="立即购买"
				@click="buy"
			/>
		</van-goods-action>
		<!-- 商品规格属性选择弹出层 -->
		<van-popup
			v-model="show"
			position="bottom"
			>
			<div class="popup-container">
				<div class="f-s">
					<img :src="attr_img" alt="">
					<span class="red">{{attr_price}}</span>
				</div>
				<!-- 属性规格 -->
				<ul class="f-s attr-list">
					<li 
						v-for='(item,index) in product.attribute' 
						@click='choseAttr(index,item)' 
						:class="index == flag ? 'active' : ''" 
						:key='item.g_id'>
						{{item.name}}
						<span v-if='item.stock <= 0' style='font-size: 0.5rem;'>(无库存)</span>
					</li>
				</ul>
				<!-- 选择数量 -->
				<div class="s-b">
					<span>选择购买数量</span>
					<van-stepper v-model="number" />
				</div>
				<ul class="footer f-s">
					<li @click='confirmAddShopCar'>加入购物车</li>
					<li @click='confirmBuy'>立即购买</li>
				</ul>
			</div>
			
		</van-popup>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				options :{
					loop: true,
					pagination: {
						el: '.swiper-pagination',
					},
					observer:true,
					observeParents : true,
				},
				product :null,
				show : false,
				attr_img :null,//属性图片
				attr_price : null,//属性价格
				flag :-1,
				number : 1,
			}
		},
		created () {
			this.initData();
		},
		
		methods : {
			initData () {
				this.http.post('/v1/ag_goods/getGoodsOne',{
					id : this.$route.params.id
				}).then(res => {
					this.product = res.data;
					this.attr_img = res.data.cover;
					this.attr_price = res.data.price;
				})
			},
			onClickIcon () {},
			onClickButton(){},
			//加入购物车
			joinShopCar () {
				//判断该商品是否有规格属性可选
				if (this.product.attribute) {
					if (this.flag < 0) {
						this.show = true;
					} else {
						//直接执行加入购物车程序
						this.shopCarHandle()
					}
					
				} else {
					//直接执行加入购物车程序
					this.shopCarHandle()
				}
				
			},
			buy () {
				//判断该商品是否有规格属性可选
				if (this.product.attribute) {
					this.show = true;
				} else {
					//直接执行购买程序
					
				}
			},
			choseAttr (index,item) {
				if (item.stock <= 0) {
					return;
				}
				this.flag = index;
				this.attr_img = item.img;
				this.attr_price = item.price;
				
			},
			//确认加入购物车
			confirmAddShopCar () {
				if (this.enableHandle()) {
					this.shopCarHandle()
				} else {
					this.utils.toast('请选择商品属性')
				}
			},
			//确认购买
			confirmBuy () {
				if (this.enableHandle()) {
					let data = [{
						goods_id : this.product.id,
						goods_name : this.product.name,
						attribute_id : this.product.attribute.length > 0 ? this.product.attribute[this.flag].id : 0,
						number : this.number,
						img : this.product.attribute.length > 0 ? this.attr_img:  this.product.cover,
						price : this.product.attribute.length > 0 ? this.attr_price:  this.product.price,
						attribute_name : this.product.attribute.length > 0 ? this.product.attribute[this.flag].name : null
					}]
					
					this.http.post('/v1/ag_order/confirmOrder',{
						goods : JSON.stringify(data)
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
					this.utils.toast('请选择商品属性')
				}
			},
			//判断商品是否允许加入购物车或直立即购买
			enableHandle() {
				if (this.product.attribute.length > 0) {
					if (this.flag > -1) {
						return true
					} else {
						return false
					}
				} else {
					return true;
				}
				
			},
			//加入购物车程序
			shopCarHandle () {
				this.http.post('https://laravel.linxmwx.cn/v1/ag_cart/add',{
					goodsId  : this.$route.params.id,
					number : this.number,
					attributeId : this.flag > -1 ? this.product.attribute[this.flag].id :null
				}).then(res => {
					this.utils.toast(res.data.msg);
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
<style lang="less" scoped>
	.product-detail {
		padding-bottom: 80px;
		.product-info {
			padding: 10px;
			background: #fff;
			h1 {
				margin-bottom: 8px;
				font-size: 14px;
				font-weight: bold;
			}
			dl {
				.red {
					font-weight: bold;
					font-size: 15px;
				}
				color: #555;
				.iconfont {
					font-size: 13px;
				}
			}
		}
		.product-img-detail  {
			h1 {
				margin: 15px 0;
				color: #ccc;
				text-align: center;
			}
			img {
				display: block;
			}
		}
	}
	.popup-container {
		height: 100%;
		padding: 20px 10px 10px;
		img {
			width: 80px;
			height: 80px;
			border-radius: 4px;
			margin-right: 15px;
		}
		.attr-list {
			margin : 15px 0;
			flex-wrap: wrap;
			li {
				padding: 4px 12px;
				margin-right : 10px;
				margin-bottom: 10px;
				background: #ccc;
				font-size: 12px;
				border-radius: 10px;
			}
			.active {
				background: orangered;
				color: #fff;
			}
		}
		.footer {
			margin-top: 15px;
			li {
				width: 50%;
				text-align: center;
				padding: 15px 0;
				font-size: 13px;
				color: #fff;
				&:nth-of-type(1) {
					background: #ff976a;
				}
				&:nth-of-type(2) {
					background: #f44;
				}
			}
		}
	}
	
</style>
