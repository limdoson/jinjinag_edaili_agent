<template>
	<div class="invite page">
		<back-header></back-header>
		<p class="tips">请选择邀请代理的代理等级</p>
		<van-radio-group v-model='agent_level'>
			<van-cell-group>
				<van-cell 
					:title="`${item.name}(${item.money}元)`" 
					clickable 
					@click="agent_level = item.id" 
					v-for='item in $store.state.agentApply'
					:key='item.id'>
					<van-radio :name="item.id" checked-color='orangered'/>
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
				agent_level : null,
			}
		},
		created () {
			
		},
		
		methods : {
			curfirm () {
				if (!this.agent_level) {
					this.utils.toast('请选择要邀请的代理等级');
					return;
				}
				this.$router.push('/invite-page/'+this.agent_level)
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
