import Vue from 'vue'
import App from './App.vue'


//import bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)


//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

library.add(faSpinner, faLaptopCode)
Vue.component('icons', FontAwesomeIcon)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
