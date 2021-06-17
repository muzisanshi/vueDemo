<template>
	<div>
		<label class="block">4.v-for指令</label>
		<div>
			<p v-for="(it,id) in list" :key="id">{{it.name}}</p>
		</div>
		<button @click="add">添加一项</button>
	</div>
</template>

<script>
	export default{
		data:() => {
			return {
				list:[
					{
						name:'(1).我是小明'
					},
					{
						name:'(2).我是花花'
					},
					{
						name:'(3).我是王刚'
					}
				]
			}
		},
		methods:{
			add(){
				this.list.push({
					name:'('+(this.list.length+1)+').我是新增项'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
