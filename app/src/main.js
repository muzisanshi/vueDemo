import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入组件
const requireComponent = require.context('./components',false,/.*\.vue/)
requireComponent.keys().forEach(name => {
	console.log("----组件名----"+name)
})

new Vue({
  render: h => h(App)
}).$mount('#app')
