<template>
	<div class="my-team page">
		<back-header></back-header>
		<header>
			团队总人数
			<p>{{total}}</p>
		</header>
		<van-list
			
			v-model='loading'
			:finished='finished'
			finished-text='没有更多了'
			@load='load'>
			<ul class="record-list" v-if='list.length'>
				<li class="s-b" v-for='item in list' :key='item.id'>
					<div>
						<p>ID：<span class="red">{{item.id}}</span>，姓名：<span class="red">{{item.realname}}</span>，进货总额：<span class="red">￥{{item.purchase_money}}</span></p>
						<p class="time">注册时间：{{item.add_time}}</p>
					</div>
					<div>
						<span class="agent-level">{{item.agent_name}}</span>
					</div>
				</li>
			</ul>
			<none v-else></none>
		</van-list>
		
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				list : [],
				total : 0,
				loading : false,
				finished :false,
				page :1,
				limit : 10,
			}
		},
		created () {
			
		},
		
		methods : {
			load () {
				this.http.post('/v1/ag_agent/getMyTeam',{
					limit : this.limit,
					page : this.page
				}).then(res => {
					this.loading = false;
					if (res.data.data) {
						this.list = this.list.concat(res.data.data);
						this.total = res.data.total;
						this.page ++;
					} else {
						this.finished = true;
					}
					
				})
			}
		},
	}
</script>
