//这个文件是对axios进行二次封装
// 额外的让axios发送请求的时候，具有其他功能
// （1）配置基础路由路径和超时限制
// （2）添加进度条信息 nprogress
//  (3) 返回的响应不再需要从data属性当中拿数据，而响应就是我们要的数据
// （4） 统一处理请求错误，具体请求也可选择处理或不处理
import axios from 'axios'

// 引入nprogress相关的js和css
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//以后要是对axios二次封装，不会在axios身上直接去封装，而是在创建的axios实例下经行封装
//axios.create()创建一个新的和axios具有相同功能的一个实例
const service = axios.create({
    baseURL:'/api',     //设置当前项目中所有接口路径的公共路径，基础路径
    timeout:200000  //超时时间
})


//（2）添加进度条信息 nprogress,若是以后你想对axios添加额外的功能或者是给请求头添加额外的信息，必然有用到axios的请求拦截器和响应拦截器
// 请求拦截器
service.interceptors.request.use(
    // 请求成功的回调，config其实是我们的请求报文，这个请求报文最后一定返回去，因为还要继续往下走
    (config)=>{
        NProgress.start();  //开启进度条
        // 在这里我们可以加额外的功能，也可以给请求头添加需要的资源
      return config
},
 // 请求失败的回调，可不写，因为失败了就没有下文了
   ()=>{
})

// 响应拦截器
service.interceptors.response.use(
  //response就是你的响应报文，也可以添加额外功能或者对响应报文进行处理
  (response)=>{
    NProgress.done();  //停止进度条
    //(3) 返回的响应不再需要从data属性当中拿数据，而响应就是我们要的数据
    return response.data
  },
  (error)=>{
    NProgress.done();   //停止进度条
    
    //（4） 统一处理请求错误，具体请求也可选择处理或不处理
    //如果后面还想处理这个错误，返回失败的Promise
    // return Promise.reject(new Error('发送ajax请求失败'))  

    // 如果后面不想处理这个错误，中断Promise链
     return new Promise(()=>{}) //返回的是pading状态的Promise链，后期也就没办法处理了
  }
  );

// 把封装好的service暴露出去
  export default service