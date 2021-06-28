<template>
	<div>
		<label class="block">13.Slot插槽</label>
		<div>
			<div>&nbsp;&nbsp;(1).默认插槽: <slot></slot></div>
			<div>&nbsp;&nbsp;(2).具名插槽: <slot name="myname"></slot></div>
			<div>&nbsp;&nbsp;(3).v-slot具名插槽: <slot name="vs"></slot></div>
			<div>&nbsp;&nbsp;(3).插槽绑定数据: <slot name="bind" :data="sonData"></slot></div>
		</div>
	</div>
</template>

<script>
	export default{
		data:() => {
			return {
				sonData:{
					name:'lilei',
					age:32
				}
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
