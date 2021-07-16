import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex)

//引入home和user
import home from '@/store/home' 
import user from '@/store/user'

// Vuex的4个核心概念
const state = {
    // 存数据

}
const mutation = {
    // 直接修改数据
}
const action = {
    //与组件当中用户对接
    // 一般都是异步发送请求
    // 提交mutation
}
const getters = {
    // 后面用来简化数据的操作
}
export default new Vuex.Store({
    state,
    mutation,
    action,
    getters,
    // modules代表模块化
    modules:{
    home,
    user
    }
})