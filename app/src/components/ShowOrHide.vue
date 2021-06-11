<template>
	<div>
		<label class="block">3.显示或者隐藏</label>
		<div>
			<p>
				<label v-if="isShow">我是你大爷!</label>
				<button @click="showOrHide" style="margin-left: 10px;">显隐</button>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		data:() => {
			return {
				isShow : true
			}
		},
		methods:{
			showOrHide(){
				this.isShow = !this.isShow
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
