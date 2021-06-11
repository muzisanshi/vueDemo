<template>
	<div>
		<label class="block">2.自定义属性</label>
		<div>
			<p>{{myProp}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			myProp:{
				type:String,
				default:() => {
					return ''
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
