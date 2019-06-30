<template>
	<div class="stock-purchase" v-if='allTree'>
		<div class="search">
			<van-search placeholder="请输入搜索关键词" shape='round' v-model="key_word" @search="search"/>
		</div>
		<!-- 左侧主分类选择区 -->
		<div class="main-cls">
			<ul>
				<li v-for='(item,index) in allTree' :key='item.value' :class="active == index ? 'active' : ''" @click='tab(index,item.value)'>
					{{item.label}}
				</li>
			</ul>
		</div>
		<div class="container">
			<router-link tag='img' :to='levelTree.top.url' :src='levelTree.top.img' v-if='levelTree.top.url'></router-link>
			<ul class="sub-cls">
				<li v-for='(item,index) in levelTree.tree' :key='item.value'  @click='clsClick(item)'>
					<img :src="item.img" alt="">
					<p>{{item.label}}</p>
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
				allTree :null,//顶级分类数据
				levelTree : null,//当前分类的子分类数据
			}
		},
		created () {
			this.initData();
		},
		
		methods : {
			initData(id) {
				this.http.post('/v1/ag_goods/getType',{
					id : id ? id : null
				}).then(res => {
					this.allTree = res.data.allTree;
					this.levelTree = res.data.levelTree
				})
			},
			search () {
				console.log(1)
			},
			tab (index,id) {
				console.log(id)
				this.active = index;
				this.initData(id);
			},
			//点击子分类
			clsClick (item) {
				//判断子分类底下是否还有分类
				if (item.children) {
					this.initData(item.value)
				} else {
					this.$router.push('/product-list/'+item.value)
				}
			}
		},
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
						width: 80%;
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
