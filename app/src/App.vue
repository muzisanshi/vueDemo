<template>
  <div id="app">
		<div class="title">VueDemo</div>
		<text-template/>
		<attribute-bind :myProp="'I am myProp.'"/>
		<show-or-hide/>
		<v-for-directive/>
		<v-on-directive/>
		<data-binding/>
		<compute-attr/>
		<class-bind/>
		<v-on-decor/>
  </div>
</template>

<script>

import TextTemplate from './components/TextTemplate';
import AttributeBind from './components/AttributeBind';
import ShowOrHide from './components/ShowOrHide';
import VForDirective from './components/VForDirective';
import VOnDirective from './components/VOnDirective';
import DataBinding from './components/DataBinding';
import ComputeAttr from './components/ComputeAttr';
import ClassBind from './components/ClassBind';
import VOnDecor from './components/VOnDecor';
export default {
  name: 'app',
  components: {
	TextTemplate,
	AttributeBind,
	ShowOrHide,
	VForDirective,
	VOnDirective,
	DataBinding,
	ComputeAttr,
	ClassBind,
	VOnDecor,
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
	display: inline-block;
	background-color: bisque;
	padding: 4px;
	margin-top: 10px;
}
input{
	margin-bottom: 10px;
}
</style>
