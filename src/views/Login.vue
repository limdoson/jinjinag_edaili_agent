<template>
	<div class="login">
		<img src="../assets/img/logo.png" alt="">
		<div class="login-container">
			<div class="input-item">
				<i class="iconfont">&#xe61b;</i>
				<input type="text" v-model="user_name" placeholder="请输入登录账号">
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
		<router-link to='/forget-pwd' tag='p' class='forget-pwd'>
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
				user_name : null,//登录用户名
				passoword : null,//登录密码
			}
		},
		created () {
			
		},
		
		methods : {
			login () {
				if (!this.user_name) {
					this.$toast.fail('请输入登录账号');
					return;
				}
				if (!this.password) {
					this.$toast.fail('请输入登录密码');
					return;
				}
				this.$router.push('/')
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
