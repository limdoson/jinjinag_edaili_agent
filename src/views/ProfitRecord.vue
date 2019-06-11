<template>
	<div class="profit-record page">
		<back-header></back-header>
		<header>
			<h1>
				累计收益
				<p>￥<span>1000</span></p>
			</h1>
		</header>
		<van-list
			v-model='loading'
			:finished='finished'
			finished-text='没有更多了'
			@load='loadMore'>
			<ul class="record-list">
				<li class='s-b' v-for='item in list'>
					<div>
						<p>下级代理<span class="red">林文峰（ID：10）</span>进货<span class="red">1000</span>元</p>
						<p>拿货折扣：<span class="red">9折</span></p>
						<p>2018-02-02</p>
					</div>
					<div>
						收益：<span class="green">10</span>元
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
				finished : false,
				list :[]
			}
		},
		created () {
			
		},
		
		methods : {
			loadMore () {
				setTimeout(() => {
					for (let i = 0; i < 10; i++) {
					  this.list.push(this.list.length + 1);
					}
					// 加载状态结束
					this.loading = false;

					// 数据全部加载完成
					if (this.list.length >= 40) {
						this.finished = true;
					}
				}, 500);
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
