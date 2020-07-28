import Vue from 'vue'
import App from './App'
import date from 'common/date.js'


Vue.prototype.$date = date
Vue.config.productionTip = false

App.mpType = 'app'

const gotoPage = (url)=>{
	uni.navigateTo({
		url:url
	})
}

const Msg = (title,icon,time,mask)=>{
		title = title == undefined ? "系统繁忙" : title;
		icon = icon == undefined ? "none" : icon;
		time = time == undefined ? 1500 : time;
		mask = mask == undefined ? true : mask;
		uni.showToast({
				title:title,
				icon:icon,
				mask:mask,
				duration:time
		})
}

	

Vue.prototype.$gotoPage = gotoPage;
Vue.prototype.$Msg = Msg

const app = new Vue({
    ...App
		
})
app.$mount()
