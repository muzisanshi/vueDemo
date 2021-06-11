<template>
	<div>
		<label class="block">1.字符串模板</label>
		<div>
			<p>{{hello}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		data:() => {
			return {
				hello:'你好,世界!'
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
