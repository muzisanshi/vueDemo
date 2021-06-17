<template>
	<div>
		<label class="block">6.计算属性</label>
		<div>
			<p>{{comMsg}}</p>
		</div>
		<button @click="change">重新计算</button>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				msg:'hello,world!'
			}
		},
		computed:{
			comMsg(){
				return this.msg
			}
		},
		methods:{
			change(){
				this.msg = '来呀,快活呀!'
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
