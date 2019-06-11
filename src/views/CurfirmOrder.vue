<template>
	<div class="curfirm-order page">
		<back-header></back-header>
		<!-- 选择联系人 -->
		<div class="contacts">
			<div class="s-b" @click='show = true'>
				<span>选择收货人</span>
				<i class="iconfont">&#xe641;</i>
			</div>
		</div>
		<!-- 订单信息 -->
		<div class="order-info">
			<h1 class="title">订单信息</h1>
			<ul class="product-list">
				<li class='f-s'>
					<img src="../assets/img/logo.png" alt="">
					<div>
						<h2>商品名称</h2>
						<p>
							<span class="attr">规格1</span>
							<span class="attr">规格2</span>
						</p>
						<p class='product-des s-b'>
							<span>
								进货单价：<span class="red">￥10</span>
							</span>
							<span>
								进货数量：<span class="red">10</span>
							</span>
						</p>
					</div>
				</li>
				<li class='f-s'>
					<img src="../assets/img/logo.png" alt="">
					<div>
						<h2>商品名称</h2>
						<p>
							<span class="attr">规格1</span>
							<span class="attr">规格2</span>
						</p>
						<p class='product-des s-b'>
							<span>
								进货单价：<span class="red">￥10</span>
							</span>
							<span>
								进货数量：<span class="red">10</span>
							</span>
						</p>
					</div>
				</li>
			</ul>
		</div>
		<!-- 备注信息 -->
		<div class="remark">
			<van-field v-model="remark" type='textarea' placeholder="如果需要,可输入备注信息" style='flex: 1;'/>
		</div>
		
		<!-- 底部按钮 -->
		<footer @click='show_action_sheet = true'>
			合计：￥100，立即支付
		</footer>
		<!-- 选择地址 -->
		<van-popup v-model="show" position="bottom" :overlay="true">
			<ul class="adr-list">
				<li class="s-b">
					<div>
						<h1>林杜森-15960209969</h1>
						<p>福建省厦门市思明区国际石材中心福建省厦门市思明区国际石材中心福建省厦门市思明区国际石材中心福建省厦门市思明区国际石材中心411</p>
					</div>
					<i class="iconfont">&#xe66c;</i>
				</li>
				<li class="s-b">
					<div>
						<h1>林杜森-15960209969</h1>
						<p>福建省厦门市思明区国际石材中心福建省厦门市思明区国际石材中心福建省厦门市思明区国际石材中心福建省厦门市思明区国际石材中心411</p>
					</div>
					<i class="iconfont">&#xe66c;</i>
				</li>
			</ul>
			<div class="btn">新增地址</div>
		</van-popup>
		<!-- 选择支付方式 -->
		<van-action-sheet
			v-model="show_action_sheet"
			:actions="pay_type"
			cancel-text="取消"
			@select="onSelect"
		/>
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
						name : '货款支付',
						pay_type :1
					},{
						name :'微信支付',
						pay_type :2
					},{
						name : '支付宝支付',
						pay_type :3
					}
				]
			}
		},
		created () {
			
		},
		
		methods : {
			onSelect (item) {
				console.log(item)
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
