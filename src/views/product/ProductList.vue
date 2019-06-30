<template>
	<div class="product-list page">
		<back-header></back-header>
		<van-list
			v-model="loading"
			:finished="finished"
			finished-text="没有更多了"
			@load="onLoad">
			<ul class="list f-s" v-if='list'>
				<router-link tag='li' :to="'/product-detail/'+item.id" v-for='item in list' :key='item.id'>
					<img :src="item.cover" alt="">
					<h1>{{item.name}}</h1>
					<p><span class="red">{{item.price}}</span></p>
				</router-link>
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
				list :null,
				page :1,
				limit : 10,
				loading :false,
				finished :false
			}
		},
		created () {
			//this.initData();
		},
		
		methods : {
			onLoad(){
				this.http.post('/v1/ag_goods/getGoodsList',{
					tId : this.$route.params.id,
					limit :this.limit,
					page : this.page
				}).then(res => {
					if (res.data) {//有数据
						if (this.page == 1) {
							this.list = res.data.data;
							
						} else {
							this.list = this.list.concat(res.data.data);
							
						}
						this.page ++;
						this.loading = false;
					} else {//没有数据
						this.finished = true;
						this.loading = false;
					}
				})
			}
		},
	}
</script>
<style lang="less">
	.product-list {
		.list {
			-webkit-flex-wrap :wrap;
			li {
				width: 50%;
				text-align: center;
				background: #fff;
				padding: 8px 0;
				border-bottom: 1px solid #f1f1f1;
				h1 {
					width: 100%;
					margin: 8px 0;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: 12px;
				}
				&:nth-child(2n - 1) {
					box-shadow: -1px 0px inset #f1f1f1;
				}
				img {
					width: 80%;
				}
			}
		}
	}
</style>