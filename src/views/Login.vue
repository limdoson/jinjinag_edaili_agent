<template>
	<div class="login">
		<img src="../assets/img/logo.png" alt="">
		<div class="login-container">
			<div class="input-item">
				<i class="iconfont">&#xe61b;</i>
				<input type="text" v-model="account" placeholder="请输入登录账号">
			</div>
			<div class="input-item">
				<i class="iconfont" style="font-size: 20px;">&#xe623;</i>
				<input type="password"  v-model="passoword" placeholder="请输入登录密码">
			</div>
			<div class="btn-item">
				<van-button type="primary" size='small' @click='login'>立即登录</van-button>
			</div>
		</div>
		<!-- 忘记密码 -->
		<router-link to='/reset-pwd' tag='p' class='forget-pwd'>
			<i class="iconfont">&#xe629;</i>
			忘记密码
		</router-link>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				account : null,//登录用户名
				passoword : null,//登录密码
			}
		},
		created () {
			
		},
		
		methods : {
			login () {
				if (!this.account) {
					this.$toast.fail('请输入登录账号');
					return;
				}
				if (!this.passoword) {
					this.$toast.fail('请输入登录密码');
					return;
				}
				this.http.post('/v1/ag_agent/login',{
					account : this.account,
					password :this.passoword
				}).then(res => {
					this.utils.toast('登录成功');
					this.$store.commit('initUserInfo',res.data)
					this.$router.push('/index')
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
