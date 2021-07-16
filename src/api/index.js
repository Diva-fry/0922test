// 这个文件写的都是函数，我们叫接口请求函数
// 以后，我们每个接口都对应了一个函数，如果想要拿到相关接口的数据，只需要调用相关的接口请求函数
import request from './ajax'

// axios使用 有函数用法axios({url:'',method:''}),,, 也有对象用法axios.get('')
//三种请求参数  params参数（是在url当中携带的，属于路径的一部分）   
//query参数（可以在url当中携带，以？分割，也可以在配置对象中配置，配置的属性名叫params）   
//请求体参数(在配置对象当中data里面配置，请求方式是put和post才有请求体参数0)



// 请求Nav导航分类的函数
// api/product/getBaseCategoryList
// get
// reqCategoryList函数的返回值是request,而request函数的返回值是Promise
export const reqCategoryList = () =>{
   return request({
       url:'/product/getBaseCategoryList',
       method:'get'
   })
}



//验证请求是否成功,但是得先在main当中引入模块
//reqCategoryList()    