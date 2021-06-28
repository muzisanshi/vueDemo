<template>
	<div>
		<label class="block">14.动态组件</label>
		<div></div>
		<label style="vertical-align: top;">当前组件组件：</label>
		<div style="background-color: lightgreen;display: inline-block;margin-top: 10px;margin-bottom: 10px;">
			<component :is="curComp"></component>
		</div>
		<div></div>
		<button @click="switchComp">切换组件组件</button>
	</div>
</template>

<script>
	import AttributeBind from './AttributeBind'
	import ClassBind from './ClassBind'
	export default{
		components:{
			AttributeBind,
			ClassBind
		},
		data:() => {
			return {
				curComp:AttributeBind
			}
		},
		methods:{
			switchComp(){
				this.curComp = ClassBind
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
