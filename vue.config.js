module.exports={
    lintOnSave:false, //禁用eslint
    // 设置跨域
    devServer:{
        proxy: {
            '/api': {
                // 转发的服务器地址
              target: 'http://182.92.128.115/',
               // 是否把路径当中的/api去掉，是否去掉要看接口路径，如果有就不能去掉
              // pathRewrite: { '^/api': '' },
            },
          },
    }
}