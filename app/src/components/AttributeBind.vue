<template>
	<div>
		<label class="block">2.自定义属性</label>
		<div>
			<p>{{myProp}} {{fuck}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		inheritAttrs:true,
		props:{
			myProp:{
				type:String,
				default:() => {
					return ''
				}
			},
			fuck:String
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
