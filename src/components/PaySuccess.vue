<template>
	<div class="pay-success">
		<h1>恭喜，订单支付成功！</h1>
		<div class="btn" @click='$router.back()'>返回商城</div>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.pay-success {
		h1 {
			font-weight: bold;
			font-size: 16px;
			padding: 30px 0;
			text-align: center;
			color: orangered;
		}
	}
</style>
