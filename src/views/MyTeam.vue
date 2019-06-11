<template>
	<div class="my-team page">
		<back-header></back-header>
		<header>
			团队总人数
			<p>10</p>
		</header>
		<van-list
			v-model='loading'
			:finished='finished'
			finished-text='没有更多了'
			@load='loadMore'>
			<ul class="record-list">
				<li class="s-b" >
					<div>
						<p>ID：<span class="red">1</span>，姓名：<span class="red">林杜森</span>，进货总额：<span class="red">￥100</span></p>
						<p class="time">注册时间：2018-08-08</p>
					</div>
					<div>
						<span class="agent-level">一级代理</span>
					</div>
				</li>
			</ul>
		</van-list>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				loading : false,
				finished :false
			}
		},
		created () {
			
		},
		
		methods : {
			loadMore () {
				
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
