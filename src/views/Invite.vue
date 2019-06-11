<template>
	<div class="invite page">
		<back-header></back-header>
		<p class="tips">请选择邀请代理的代理等级</p>
		<van-radio-group v-model='agent_level'>
			<van-cell-group>
				<van-cell title="一级代理(￥1999)" clickable @click="agent_level = '1'">
					<van-radio name="1" checked-color='orangered'/>
				</van-cell>
				<van-cell title="二级代理(￥999)" clickable @click="agent_level = '2'">
					<van-radio name="2" checked-color='orangered'/>
				</van-cell>
			</van-cell-group>
		</van-radio-group>
		<div class="btn" @click='curfirm'>生成邀请链接</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				agent_level : '1',
			}
		},
		created () {
			
		},
		
		methods : {
			curfirm () {
				this.$router.push('/invite-page')
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
