<template>
	<div class="reg page">
		<back-header></back-header>
		<van-cell-group>
			<van-field
				v-model="realname"
				label="姓名"
				type='text'
				placeholder="请输入真实姓名"/>
			<van-field
				v-model="tel"
				label="手机"
				type='number'
				placeholder="请输入手机号码"/>
			<!-- <van-field
				v-model="code"
				label="tel"
				type='number'
				placeholder="请输入验证码">
				<van-button slot="button" size="small" type="primary" :disabled ='disabled' @click='getCode'>{{btn_text}}</van-button>
			</van-field> -->
			<van-field
				v-model="password"
				label="密码"
				placeholder="请输入登录密码"/>
			<van-field
				v-model="once_password"
				label="确认密码"
				placeholder="请再次输入登录密码"/>
		</van-cell-group>
		<div class="btn" @click='confirm'>立即注册</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				realname : null,
				tel : null,
				password : null,
				once_password : null,
			}
		},
		methods: {
			confirm() {
				if (!this.realname) {
					this.utils.toast('请填写您的真实姓名');
					return;
				}
				if (!this.tel) {
					this.utils.toast('请输入手机号码');
					return;
				}
				if (!/^1[23456789]\d{9}$/.test(this.tel)) {
					this.utils.toast('手机号码错误，请重新输入');
					return;
				}
				
				if (!this.password) {
					this.utils.toast('请输入新密码');
					return;
				}
				if (!this.once_password) {
					this.utils.toast('请输入确认密码');
					return;
				}
				if (this.password != this.once_password) {
					this.utils.toast('两次输入的密码不一致，请重新输入');
					return;
				}
				this.http.post('/v1/ag_agent/applyAgent',{
					recommend_id : this.$route.params.recommend_id,
					level : this.$route.params.level,
					realname :this.realname,
					tel : this.tel,
					password :this.password,
					once_password :this.once_password
				}).then(res => {
					
				})
			}
		},
	}
</script>

<style>
</style>
