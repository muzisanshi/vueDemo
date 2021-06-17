<template>
	<div>
		<label class="block">6.双向数据绑定</label>
		<div>
			<p>{{msg}}</p>
			<input v-model="msg"/>
		</div>
		<button @click="change">一键修改</button>
	</div>
</template>

<script>
	export default{
		data:() => {
			return {
				msg:'hello,world!'
			}
		},
		methods:{
			change(){
				this.msg = ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
