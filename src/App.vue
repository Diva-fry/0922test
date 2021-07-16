<template>
  <div>
    <Header/>
    <router-view></router-view>
    <!-- 这样也可以实现登录和注册页面不显示Footer组件，但很繁琐
    <Footer v-show="$route.path !== '/login'&& $route.path !=='/register'"/> -->
    <Footer v-show="!$route.meta.isHidden"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  // 非路由组件注册
  components:{
    Header,
    Footer
  }
 
}
</script>

