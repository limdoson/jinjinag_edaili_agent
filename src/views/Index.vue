<template>
	<div class="index">
		<h1 class="s-b user-info">
			<p>{{$store.state.agent.realname}}，你好！</p>
			<span class="agent-level">{{$store.state.agent.level_name}}</span>
		</h1>
		<ul class="data f-s">
			<li>
				<router-link tag='div' to='/invoice-record'>
					<h1>
						<i class="iconfont">&#xe612;</i>
						{{$store.state.agent.purchase_money}}
					</h1>
					<h2>货款</h2>
					<p>用于进货</p>
				</router-link>
				<router-link tag='span' to='recharge'>
					充值
				</router-link>
			</li>
			<li>
				<router-link tag='div' to='/profit'>
					<h1>
						<i class="iconfont">&#xe655;</i>
						{{$store.state.agent.balance}}
					</h1>
					<h2>收益</h2>
					<p>可提现</p>
				</router-link>
				<router-link tag='span' to='/cash-apply'>
					提现
				</router-link>
			</li>
		</ul>
		<ul class="menu">
			<router-link tag='li' to='/index/stock-purchase'>
				<img src="../assets/img/jin_huo.png" alt="">
				<p>我要进货</p>
			</router-link>
			<router-link tag='li' to='/order'>
				<img src="../assets/img/order.png" alt="">
				<p>进货订单</p>
			</router-link>
		</ul>
		<ul class="data f-s" style="margin-top: 8px;">
			<li @click="$router.push('/invite')">
				<div>
					<h1>
						<i class="iconfont">&#xe644;</i>
						本月新增代理
					</h1>
					<h2><a class="red">{{$store.state.agent.month}}</a>人</h2>
				</div>
				<span>邀请代理</span>
			</li>
			<li @click="$router.push('/invite')">
				<div>
					<h1>
						<i class="iconfont">&#xe644;</i>
						今日新增代理
					</h1>
					<h2><a class="red">{{$store.state.agent.today}}</a>人</h2>
				</div>
				<span>邀请代理</span>
			</li>
		</ul>
		<!-- member-data -->
		<ul class="cell-menu">
			
		</ul>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				
			}
		},
		created () {
			let params = location.search;
			if (params) {
				let str = params.substring(1);
				let code = str.split('&')[0].split('=')[1];
				let state = str.split('&')[1].split('=')[1];
				if (state == 'STATE') {
					state = null
				}
				this.http.post('/v1/wechat/agentGetOpenid',{
					code : code
				}).then(res => {
					
					console.log(res)
					// this.initData();
				})
			} else {
				this.http.post('/v1/wechat/getAppId',{
					
				}).then(res => {
					let url = encodeURIComponent('https://laravel.linxmwx.cn/agent/index');
					let _href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+ res.data.appId + '&redirect_uri=' + url + '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect'
					
					location.href = _href;
				})
				
			}
			
		},
		
		methods : {
			
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
