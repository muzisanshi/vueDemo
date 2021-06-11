<template>
  <div id="app">
		<div class="title">VueDemo</div>
		<text-template></text-template>
		<attribute-bind :myProp="'I am myProp.'"></attribute-bind>
		<show-or-hide></show-or-hide>
  </div>
</template>

<script>

import TextTemplate from './components/TextTemplate';
import AttributeBind from './components/AttributeBind';
import ShowOrHide from './components/ShowOrHide';
export default {
  name: 'app',
  components: {
	TextTemplate,
	AttributeBind,
	ShowOrHide,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
.title{
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 20px;
}
.block{
	background-color: bisque;
	padding: 4px;
}
</style>
