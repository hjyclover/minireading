import Vue from 'vue'
import App from './App'
import date from 'common/date.js'


Vue.prototype.$date = date
Vue.config.productionTip = false

App.mpType = 'app'


	


const app = new Vue({
    ...App
		
})
app.$mount()
