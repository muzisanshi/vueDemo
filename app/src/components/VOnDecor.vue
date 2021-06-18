<template>
	<div>
		<label class="block">5.v-on修饰符</label>
		<div></div>
		<div @click="onClick2" class="parent">
			<button @click.stop="onClick">阻止事件继续传播</button>
		</div>
		<div style="margin-top: 10px;">
			<form v-on:submit.prevent="onSubmit">
				<button type="submit">禁止表单提交</button>
			</form>
		</div>
		<div @click.capture="onClick2" class="parent">
			<button @click="onClick">事件捕获</button>
		</div>
		<div></div>
		<div @click.self="onClick2" class="parent">
			<button @click.self="onClick">点击自身</button>
		</div>
		<div></div>
		<div class="parent">
			<button @click.once="onClick">只能点击一次</button>
		</div>
		<div style="margin-top: 10px;">
			<input @keyup.enter="onEnter" placeholder="监听回车按键"/>
		</div>
		<div style="margin-top: 10px;">
			<button @click.ctrl="onClick">点击并按下ctrl触发</button>
		</div>
	</div>
</template>

<script>
	export default{
		data:() => {
			return {
				
			}
		},
		methods:{
			onClick(){
				alert('点击了子元素')
			},
			onClick2(){
				alert('点击了父元素元素')
			},
			onSubmit(){
				alert('已禁止表单提交')
			},
			onEnter(){
				alert('按下了回车键')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.parent{
		padding: 10px;
		background-color: royalblue;
		display: inline-block;
		margin-top: 10px;
	}
</style>
