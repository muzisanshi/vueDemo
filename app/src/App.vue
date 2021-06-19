<template>
  <div id="app">
		<div class="title">VueDemo</div>
		<text-template/>
		<attribute-bind id="attribute" :myProp="'I am myProp.'" fuck="fuck"/>
		<show-or-hide/>
		<v-for-directive/>
		<v-on-directive/>
		<data-binding/>
		<compute-attr/>
		<class-bind/>
		<v-on-decor/>
		<self-define-event @self-def-event="onEvent"/>
		<self-def-v-model v-model="modelState"/>
		
		<sync-decor :syncData.sync="sData"/>
		<div>{{sData}}</div>
		
		<slot-demo>
			<label slot="default">我是默认插槽内容</label>
			<label slot="myname">我是具名插槽内容</label>
			<template v-slot:vs>
				<label>我是v-slot指定内容</label>
			</template>
			<!-- v-slot:等价于# -->
			<template #bind="scope">
				<label>{{scope.data.name + '-' + scope.data.age}}</label>
			</template>
			<!-- 老的写法 -->
			<!-- <label slot="bind" slot-scope="scope">{{scope.data.name + '-' + scope.data.age}}</label> -->
		</slot-demo>
		
		<dynamic-comp/>
  </div>
</template>

<script>

import TextTemplate from './components/TextTemplate'
import AttributeBind from './components/AttributeBind'
import ShowOrHide from './components/ShowOrHide'
import VForDirective from './components/VForDirective'
import VOnDirective from './components/VOnDirective'
import DataBinding from './components/DataBinding'
import ComputeAttr from './components/ComputeAttr'
import ClassBind from './components/ClassBind'
import VOnDecor from './components/VOnDecor'
import SelfDefineEvent from './components/SelfDefineEvent'
import SelfDefVModel from './components/SelfDefVModel'
import SyncDecor from './components/SyncDecor'
import SlotDemo from './components/SlotDemo'
import DynamicComp from './components/DynamicComp'

export default {
  name: 'app',
  data:() => {
	return {
		modelState:false,
		sData:'父组件数据'
	}  
  },
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
	SelfDefineEvent,
	SelfDefVModel,
	SyncDecor,
	SlotDemo,
	DynamicComp,
  },
  methods:{
	  onEvent(){
		  alert('触发了自定义事件')
	  }
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
