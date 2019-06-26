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
				console.log(this.agent_level)
				// this.$router.push('/invite-page')
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
