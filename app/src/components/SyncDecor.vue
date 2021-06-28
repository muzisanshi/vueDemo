<template>
	<div>
		<label class="block">12.'.sync'修饰符</label>
		<div>
			<p>{{syncData}}</p>
		</div>
		<button @click="change">同步父子组件数据</button>
	</div>
</template>

<script>
	export default{
		props:{
			syncData:{
				type:String,
				default:"子组件数据"
			}
		},
		data:() => {
			return {
				
			}
		},
		methods:{
			change(){
				this.$emit('update:syncData','子组件数据')
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
