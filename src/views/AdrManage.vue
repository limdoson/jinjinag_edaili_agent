<template>
	<div class="adr-manage page">
		<back-header></back-header>
		<ul class="adr-list" v-if='list'>
			<li class="s-b" v-for="item in list" :key='item.id'>
				<div>
					<h1>{{item.name}}-{{item.tel}}</h1>
					<p>{{item.province}}{{item.city}}{{item.area}}{{item.adr}}</p>
				</div>
				<router-link tag='i' class='iconfont' :to="'/adr-add/'+item.id">&#xe66c;</router-link>
			</li>
		</ul>
		<none v-else></none>
		<router-link tag='footer' to='/adr-add'>
			添加地址
		</router-link>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				list : null,//
			}
		},
		created () {
			this.initData();
		},
		
		methods : {
			initData () {
				this.http.post('/v1/ag_agent/getAdr',{
					
				}).then(res => {
					this.list = res.data;
					console.log(res)
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
