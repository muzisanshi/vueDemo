<template>
	<div>
		<label class="block">10.自定义事件</label>
		<div></div>
		<button @click="trigger" style="margin-top: 10px;">触发自定义事件</button>
	</div>
</template>

<script>
	export default{
		data:() => {
			return {
				
			}
		},
		methods:{
			trigger(){
				this.$emit('self-def-event')
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
