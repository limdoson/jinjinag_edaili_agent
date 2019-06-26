<template>
	<div class="reset-pwd page">
		<back-header></back-header>
		<van-cell-group>
			<van-field
				v-model="tel"
				label="手机"
				type='number'
				placeholder="请输入手机号码"/>
			<van-field
				v-model="code"
				label="验证码"
				type='number'
				placeholder="请输入验证码">
				<van-button slot="button" size="small" type="primary" :disabled ='disabled' @click='getCode'>{{btn_text}}</van-button>
			</van-field>
			<van-field
				v-model="newPwd"
				label="新密码"
				placeholder="请输入新的登录密码"/>
			<van-field
				v-model="oncePwd"
				label="确认密码"
				placeholder="请再次输入新密码"/>
		</van-cell-group>
		<div class="btn" @click='confirm'>确认修改</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				time : 60,
				btn_text : '发送验证码',
				disabled :false,
				tel : null,//手机号码
				code :null,//验证码
				newPwd :null,//新密码
				oncePwd : null,//确认新密码
			}
		},
		methods: {
			getCode () {
				if (!this.tel) {
					this.utils.toast('请输入手机号码');
					return;
				}
				if (!/^1[23456789]\d{9}$/.test(this.tel)) {
					this.utils.toast('手机号码错误，请重新输入');
					return;
				}
				this.http.post('/v1/ag_agent/sendMobileCode',{
					tel : this.tel
				}).then(res => {
					this.utils.toast('验证码发送成功');
					this.timerHandle()
				})
			},
			timerHandle () {
				this.time --;
				this.disabled = true;
				this.btn_text = `${this.time}S后重新获取`;
				setTimeout(() => {
					if (this.time <= 0) {
						this.time = 60;
						this.disabled = false;
						this.btn_text = `重新获取`;
					} else {
						this.timerHandle()
					}
				}, 1000);
			},
			confirm () {
				if (!this.tel) {
					this.utils.toast('请输入手机号码');
					return;
				}
				if (!/^1[23456789]\d{9}$/.test(this.tel)) {
					this.utils.toast('手机号码错误，请重新输入');
					return;
				}
				if (!this.code) {
					this.utils.toast('请输入收到的验证码');
					return;
				}
				if (!this.newPwd) {
					this.utils.toast('请输入新密码');
					return;
				}
				if (!this.oncePwd) {
					this.utils.toast('请输入确认密码');
					return;
				}
				if (this.newPwd != this.oncePwd) {
					this.utils.toast('两次输入的密码不一致，请重新输入');
					return;
				}
				this.http.post('/v1/ag_agent/backPwd',{
					tel :this.tel,
					code :this.code,
					newPwd :this.newPwd,
					oncePwd : this.oncePwd
				}).then( res => {
					this.utils.msg('密码修改成功，请重新登录',() => {
						this.$router.replace('/')
					})
				})
			}
		}
	}
</script>

<style>
</style>

