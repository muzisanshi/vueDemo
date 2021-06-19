<template>
	<div>
		<label class="block">6.自定义v-model</label>
		<div>
			<p>{{'组件状态：' + state}}</p>
		</div>
		<button @click="change">修改状态</button>
	</div>
</template>

<script>
	export default{
		model:{
			prop:'state',
			event:'change'
		},
		props:{
			state:{
				type:Boolean,
				default:false
			}
		},
		data:() => {
			return {
				
			}
		},
		methods:{
			change(){
				this.$emit('change',!this.state)
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
