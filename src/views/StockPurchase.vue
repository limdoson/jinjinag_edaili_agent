<template>
	<div class="stock-purchase">
		<div class="search">
			<van-search placeholder="请输入搜索关键词" shape='round' v-model="key_word" @search="search"/>
		</div>
		<!-- 左侧主分类选择区 -->
		<div class="main-cls">
			<ul>
				<li v-for='(item,index) in 40' :key='index' :class="active == index ? 'active' : ''" @click='tab(index)'>
					分类{{index}}
				</li>
			</ul>
		</div>
		<div class="container">
			<img src="../assets/img/logo.png" alt="">
			<p>主分类广告图</p>
			<ul class="sub-cls">
				<li v-for='(item,index) in 10' :key='index +20' @click="$router.push('/product-detail')">
					<img src="https://img.alicdn.com/imgextra/i1/3107144874/TB2i9NXbwkLL1JjSZFpXXa7nFXa_!!3107144874-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp" alt="">
					<p>子分类{{index}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	export default {
		components: {
			
		},
		data () {
			return {
				key_word : null,
				active : 0,
			}
		},
		created () {
			
		},
		
		methods : {
			search () {
				console.log(1)
			},
			tab (index) {
				this.active = index;
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
<style lang="less" scoped>
	.stock-purchase {
		padding-top: 55px;
		padding-bottom: 100px;
		background: #fff;
		.search {
			position: fixed;
			top: 0;
			width: 100%;
			z-index: 1987;
		}
		.main-cls {
			position: fixed;
			top: 55px;
			left: 0;
			width: 100px;
			height: ~"calc(100% - 106px)";
			background: #f1f1f1;
			overflow-y: scroll;
			li {
				height: 40px;
				text-align: center;
				line-height: 40px;
			}
			.active {
				background: #fff;
				color: orangered;
				font-weight: bold;
			}
		}
		.container {
			padding-left: 110px;
			padding-right: 10px;
			.sub-cls {
				display: -webkit-flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				li {
					width: 30%;
					margin-right: 3%;
					margin-bottom: 10px;
					text-align: center;
					img {
						border-radius: 4px;
					}
					p {
						font-size: 12px;
					}
				}
			}
		}
	}
</style>
