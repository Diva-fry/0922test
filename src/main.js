import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import less from 'less'
import '@/api'
import store from '@/store'

// 全局注册的组件，如果一个非路由组件要被多个组件使用，就要全局注册
import TypeNav from '@/components/Type-nav'
Vue.use(less)

// 注册全局组件
Vue.component('TypeNav',TypeNav)
//@是一个别名，是个小名，代表的就是我们的src路径
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,        //我们所有的路由组件内部都可以使用this.$router(当前路由器对象)和this.$route(当前路由对象)
  store          //注册上我们所有的组件都可以拿到 this.$store
}).$mount('#app')

