<template>
	<div>
		<label class="block">7.样式绑定</label>
		<div>
			<p :class="{red:isRed}">{{comMsg}}</p>
		</div>
		<button @click="changeClass">改变样式</button>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				msg:'hello,world!',
				isRed:false
			}
		},
		computed:{
			comMsg(){
				return this.msg
			}
		},
		methods:{
			changeClass(){
				this.isRed = !this.isRed
			}
		}
	}
</script>

<style lang="scss" scoped>
	.red{
		color: red;
	}
</style>
