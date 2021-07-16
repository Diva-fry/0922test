// 引入并声明使用路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

// 向外暴露路由器对象
export default new VueRouter({
   routes:[
       {
           path:'/home',
           component:Home
       },
       {
        path:'/login',
        component:Login,
        // 是路由当中的元配置项，可以配置我们需要的任何数据
        meta:{
            isHidden:true
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            isHidden:true
        }
    }, 
    {
        path:'/search',
        component:Search
    },
    // 重定向路由，初始化页面显示内容
    {
        path:'/',
        redirect:'/home'
    },
    ]

})