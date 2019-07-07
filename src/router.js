import Vue from 'vue'
import Router from 'vue-router'
import http from './utils/http'

Vue.use(Router)

let router = new Router({
    base : process.env.NODE_ENV == 'development' ? './' : '/agent/',
    mode : process.env.NODE_ENV == 'development' ? 'hash' : 'history',
    routes : [
		{
			path : '/',
			meta : {
				title : '登录'
			},
			component : () => import('./views/Login')
		},{
			path : '/login',
			meta : {
				title : '登录'
			},
			component : () => import('./views/Login')
		},{
			path : '/index',
			meta : {
				title : '首页'
			},
			component : () => import('./views/Layout'),
			children : [
				{
					path : '',
					meta : {
						title : '首页'
					},
					component : () => import('./views/Index'),
				},{
					path : 'user',
					meta :{
						title : '我的'
					},
					component : () => import('./views/User'),
				},{//购物车
					path : 'shop-car',
					meta : {
						title : '购物车'
					},
					component : () => import('./views/ShopCar')
				},{//商品分类首页
					path : 'stock-purchase',
					meta : {
						title : '商品分类'
					},
					component : () => import('./views/StockPurchase')
				}
			]
		},{//忘记密码
			path : '/forget-pwd',
			meta : {
				title : '忘记密码'
			},
			component : () => import('./views/ForgetPwd')
		},{//代理收益
			path : '/profit',
			meta : {
				title : '我的收益'
			},
			component : () => import('./views/Profit')
		},{//收益账单
			path : '/profit-record',
			meta : {
				title : '收益账单'
			},
			component : () => import('./views/ProfitRecord')
		},{//提现记录
			path : '/cash-record',
			meta : {
				title : '提现记录'
			},
			component : () => import('./views/CashRecord')
		},{//提现申请
			path : '/cash-apply',
			meta : {
				title : '提现申请'
			},
			component : () => import('./views/CashApply')
		},{//货款记录
			path : '/invoice-record',
			meta : {
				title : '货款记录'
			},
			component : () => import('./views/InvoiceRecord')
		},{//货款充值
			path : '/recharge',
			meta : {
				title : '货款充值'
			},
			component : () => import('./views/Recharge')
		},{//我的订单
			path : '/order',
			meta : {
				title : '我的订单'
			},
			component : () => import('./views/Order')
		},{//我的代理团队
			path : '/my-team',
			meta : {
				title : '我的代理团队'
			},
			component : () => import('./views/MyTeam')
		},{//邀请代理
			path : '/invite',
			meta : {
				title : '邀请代理'
			},
			component : () => import('./views/Invite')
		},{//邀请代理链接页面
			path : '/invite-page/:level?',
			meta : {
				title : '邀请代理'
			},
			component : () => import('./views/InvitePage')
		},{//进货记录
			path : '/purchase-history',
			meta : {
				title : '历史进货数据'
			},
			component : () => import('./views/PurchaseHistory')
		},{//商品详情
			path : '/product-detail/:id?',
			meta : {
				title : '商品详情'
			},
			component : () => import('./views/ProductDetail')
		},{//确认订单
			path : '/curfirm-order',
			meta : {
				title : '确认订单'
			},
			component : () => import('./views/CurfirmOrder')
		},{//收货地址管理
			path : '/adr-manage',
			meta : {
				title : '收货地址管理'
			},
			component : () => import('./views/AdrManage')
		},{//设置
			path : '/setting',
			meta : {
				title : '设置'
			},
			component : () => import('./views/Setting')
		},{//修改密码
			path : '/reset-pwd',
			meta : {
				title : '修改密码'
			},
			component : () => import('./views/setting/ResetPwd')
		},{//代理注册
			path : '/reg/:recommend_id/:level',
			meta : {
				title : '代理注册'
			},
			component : () => import('./views/Reg')
		},{//地址添加编辑
			path : '/adr-add/:id?',
			meta : {
				title : '地址添加/编辑'
			},
			component : () => import('./views/AdrAdd')
		},{//商品列表
			path : '/product-list/:id?',
			meta : {
				title : '商品列表'
			},
			component : () => import('./views/product/ProductList')
		},,{//支付成功
			path : '/pay-success',
			meta :{
				title : '支付成功'
			},
			component : () => import('./components/PaySuccess')
		}
    ]
})

let wx_api_list =['openLocation','getLocation','updateAppMessageShareData','updateTimelineShareData','onMenuShareAppMessage','onMenuShareTimeline','chooseWXPay'];

router.beforeEach((to,form,next) => {

	if (to.path == '/order') {
		http.post('/v1/wechat/sdk',{
			url : 'https://laravel.linxmwx.cn/agent/order'
		}).then(res => {
			wx.config({
				debug : false,
				appId : res.data.appId,
				timestamp : res.data.timestamp,
				nonceStr : res.data.nonceStr,
				signature : res.data.signature,
				jsApiList : ['chooseWXPay'],
			})
			next();
		})
	} else {
		next()
	}
})

router.afterEach((to, from) => {
	document.title = to.meta.title;
	if (to.path == '/curfirm-order') {
		http.post('/v1/wechat/sdk',{
			url : location.origin + location.pathname
		}).then(res => {
			wx.config({
				debug : false,
				appId : res.data.appId,
				timestamp : res.data.timestamp,
				nonceStr : res.data.nonceStr,
				signature : res.data.signature,
				jsApiList : wx_api_list,
			})
		})
	}
})

export default router;