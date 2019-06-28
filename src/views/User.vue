<template>
	<div class="user">
		<header class="s-b">
			<div class="f-s">
				<img src="../assets/img/logo.png" alt="">
				<div>
					<h1>
						{{$store.state.agent.realname}}
						<span class="agent-level">{{$store.state.agent.level_name}}</span>
					</h1>
					<p>{{$store.state.agent.tel}}</p>
				</div>
			</div>
			<router-link tag='div' to='/setting'>
				设置
				<i class="iconfont">&#xe641;</i>
			</router-link>
		</header>
		<ul class="cell-menu">
			<router-link tag='li' to='/adr-manage'>
				<div>
					<i class="iconfont" style="color: deepskyblue;">&#xe6d9;</i>
					收货地址管理
				</div>
				
				<div>
					
					<i class="iconfont">&#xe641;</i>
				</div>
			</router-link>
			<router-link tag='li' to='/my-team'>
				<div>
					<i class="iconfont" style="color: deepskyblue;">&#xe644;</i>
					我的代理团队
				</div>
				
				<div>
					
					<i class="iconfont">&#xe641;</i>
				</div>
			</router-link>
			<router-link tag='li' to='/order'>
				<div>
					<i class="iconfont" style="color: deepskyblue;">&#xe636;</i>
					我的进订单
				</div>
				<div>
					<i class="iconfont">&#xe641;</i>
				</div>
			</router-link>
			<router-link tag='li' to='/purchase-history'>
				<div>
					<i class="iconfont" style="color: deepskyblue;">&#xe633;</i>
					历史进货数据
				</div>
				<div>
					<i class="iconfont">&#xe641;</i>
				</div>
			</router-link>
			<router-link tag='li' to='/invoice-record'>
				<div>
					<i class="iconfont" style="color: deepskyblue;">&#xe612;</i>
					货款记录
				</div>
				<div>
					<i class="iconfont">&#xe641;</i>
				</div>
			</router-link>
			<router-link tag='li' to='/profit'>
				<div>
					<i class="iconfont" style="color: deepskyblue;">&#xe655;</i>
					我的收益
				</div>
				<div>
					<i class="iconfont">&#xe641;</i>
				</div>
			</router-link>
			
		</ul>
		<div class="btn" @click='logout'>退出登录</div>
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
			
		},
		
		methods : {
			logout () {
				this.http.post('/v1/ag_agent/logout',{
					
				}).then(res => {
					this.utils.msg(res.msg,()=>{
						this.$router.replace('/')
					});
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
