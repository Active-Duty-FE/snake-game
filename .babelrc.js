module.exports = {
  //设置预定义的环境
  presets: [
    [
        //指定环境的插件
        "@babel/preset-env",
        // 配置信息
        {
            // 要兼容的目标浏览器及版本
            targets: {
                "chrome": "58",
                "ie": "11"
            },
            //指定corejs的版本
            "corejs": "3",
            //使用corejs的方式 "usage"  表示按需加载
            "useBuiltIns": "usage" 
        }

    ]
  ]
}