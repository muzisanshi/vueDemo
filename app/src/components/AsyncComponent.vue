<template>
	<div>
		<label class="block">15.异步组件</label>
		<div style="background-color: blue;width: 110px;">
			<self-def-attr/>
			<self-def-attr-two/>
		</div>
	</div>
</template>

<script>
	export default {
		components:{
			SelfDefAttr:() => import('./AttributeBind'),
			SelfDefAttrTwo:(resolve) => {
				require(['./AttributeBind'],resolve)
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
