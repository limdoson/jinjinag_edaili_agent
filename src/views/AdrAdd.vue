<template>
	<div class="adr-add page">
		<back-header></back-header>
		<van-cell-group>
			<van-field
				v-model="name"
				label="姓名"
				type='text'
				placeholder="请填写收货人姓名"/>
			<van-field
				v-model="tel"
				label="手机"
				type='text'
				placeholder="请填写收货人手机"/>
			<van-field
				v-model="area_data"
				label="所在地区"
				type='text'
				readonly
				@click='show = true'
				placeholder="点击选择所在地区"/>
			<van-field
				v-model="adr"
				label="详细地址"
				type='text'
				placeholder="详细地址"/>
			<!-- <van-switch-cell v-model="is_default" title="是否设为默认地址" active-color='orangered'/> -->
		</van-cell-group>
		<div class="btn-item">
			<div class="btn" @click='add' v-if='!$route.params.id'>添加地址</div>
			<div class="btn" v-if='$route.params.id' @click='add'>保存编辑</div>
			<div class="btn delete" v-if='$route.params.id' @click='deleteAdr'>删除地址</div>
		</div>
		<van-popup
			v-model="show"
			position="bottom"
			:style="{ height: '40%' }">
			<van-area :area-list="areaList" @cancel='show = false' @confirm='consirmChose'/>
		</van-popup>
	</div>
</template>

<script>
	import areaList from '@u/area'
	export default {
		data () {
			return {
				areaList,
				show : false,
				name : null,
				tel : null,
				province : null,
				city :null,
				area : null,
				adr : null,
				area_data : null,
				adress : null,
				is_default :false
			}
		},
		created () {
			if (this.$route.params.id) {
				this.http.post('/v1/ag_agent/getAdrOne',{
					id : this.$route.params.id 
				}).then(res => {
					this.name = res.data.name;
					this.tel = res.data.tel;
					this.area_data = `${res.data.province}/${res.data.city}/${res.data.area}`;
					this.province = res.data.province;
					this.city = res.data.city;
					this.area = res.data.area;
					this.adr = res.data.adr;
				})
			}
		},
		methods : {
			
			add () {
				if (!this.name) {
					this.utils.toast('请填写收货人姓名');
					return;
				}
				if (!this.tel) {
					this.utils.toast('请填写收货人手机');
					return;
				}
				if (!this.area_data) {
					this.utils.toast('请选择所在地区');
					return;
				}
				if (!this.adr) {
					this.utils.toast('请填写详细地址');
					return;
				}
				if (this.$route.params.id) {
					this.http.post('/v1/ag_agent/updAdr',{
						id :this.$route.params.id,
						name : this.name,
						tel : this.tel,
						province :this.province,
						city : this.city,
						area :this.area,
						adr : this.adr
					}).then(res => {
						this.utils.toast('编辑成功');
						
					})
				} else {
					this.http.post('/v1/ag_agent/addAdr',{
						name : this.name,
						tel : this.tel,
						province :this.province,
						city : this.city,
						area :this.area,
						adr : this.adr
					}).then(res => {
						this.utils.toast('添加成功');
						this.name = null;
						this.tel = null;
						this.area_data = null;
						this.adr = null;
					})
				}
				
			},
			deleteAdr () {
				this.utils.msg('确定删除该地址吗？',()=>{
					this.http.post('/v1/ag_agent/delAdr',{
						id :this.$route.params.id
					}).then(res => {
						this.utils.msg('删除成功',() => {
							this.$router.back();
						})
					})
				})
			},
			consirmChose (result) {
				this.area_data = result[0].name + '/' + result[1].name + '/' + result[2].name;
				this.province = result[0].name;
				this.city = result[1].name;
				this.area = result[2].name;
				this.show = false;
			}
		}
	}
</script>
