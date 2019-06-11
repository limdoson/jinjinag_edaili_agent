<template>
	<div class="forget-pwd">
		<back-header></back-header>
		<div class="container">
			<div class="input-item">
				<i class="iconfont">&#xe61b;</i>
				<input type="number" placeholder="请输入手机号码" style="-webkit-flex: 1;" v-model="phone" maxlength="11">
				<van-button :disabled='disabled' type="danger" size='small' @click='sendCode'>{{btn_msg}}</van-button>
			</div>
			<div class="input-item">
				<i class="iconfont">&#xe618;</i>
				<input type="number" placeholder="请输入收到的验证码" v-model="code">
			</div>
			<div class="input-item">
				<i class="iconfont">&#xe623;</i>
				<input type="password" placeholder="请输入新密码" v-model="password">
			</div>
			<div class="input-item">
				<i class="iconfont">&#xe623;</i>
				<input type="password" placeholder="请再次确认新密码" v-model="cur_password">
			</div>
			<div class="btn-item">
				<van-button type="primary" size='small' @click='curfirm'>重置密码</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				phone : null,//手机号码
				code : null,//验证码
				password : null,
				cur_password : null,
				disabled : true,//是否禁用发送按钮
				btn_msg : '发送验证码',
				time : 60
			}
		},
		created () {
			
		},
		methods : {
			curfirm () {
				if (!this.phone) {
					this.$toast('请填写手机号码');
					return;
				}
				if (!this.code) {
					this.$toast('请填写验证码');
					return;
				}
			},
			sendCode () {
				if (!this.phone) {
					this.$toast('请填写手机号码');
					return;
				}
				this.getCode();
			},
			getCode () {
				this.time --;
				this.btn_msg = `${this.time}后重新获取`;
				this.disabled = true;
				setTimeout(() => {
					
					if (this.time <= 0) {
						this.btn_msg = '重新获取';
						this.time = 60;
						this.disabled = false;
					} else {
						this.getCode()
					}
				},1000)
			}
		},
		watch : {
			'phone' (n,o) {
				if (n.length == 11) {
					this.disabled = false;
				} else {
					this.disabled = true;
				}
				
			}
		}
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
