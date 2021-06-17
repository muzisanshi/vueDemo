<template>
	<div>
		<label class="block">5.v-on指令</label>
		<div>
			<p>{{msg}}</p>
		</div>
		<button @click="reverse">点击反转</button>
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
			reverse(){
				this.msg = this.msg.split('').reverse().join('')
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
