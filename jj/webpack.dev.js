var webpack=require("webpack");
var HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    entry:__dirname+"/src/main.js",
    output:{
        path:__dirname+"/dist",
        filename:"[name].js"
    },
    module:{
        rules:[{
            test:/\.js$/,
            loader:"babel-loader"
        },
        {
            test:/\.vue$/,
            loader:"vue-loader"
        },
        {
            test:/\.css$/,
            use:["style-loader","css-loader"]
        },
        {
            test:/\.html$/,
            loader:"html-loader"
        },
        {
            test:/\.png | .jpg$/,
            loader:"url-loader"
        }
        ]
    },
    resolve:{
        alias:{
            "vue":"vue/dist/vue.js"
        }
    },
    devServer:{
        port:8088,
        host:"127.0.0.1",
        hot:true,
        compress: true,
        watchContentBase: true,
        setup(app){
            app.get("/some/path",function(req,res){
               var arr=[
                 {
                  
                   h4s:"爱宝宝",
                   ps:"新品一元抢",
                  src:"src/img/product/05.jpg"
                 },
                  {
                  
                   h4s:"爱美丽",
                   ps:"积极方向皮",
                    src:"src/img/product/01.jpg"
                 },
                  {
                  
                   h4s:"爱吃",
                   ps:"抢199",
                    src:"src/img/product/07.jpg"
                 },
                  {
                   
                   h4s:"爱穿搭",
                   ps:"穿着新衣",
                   src:"src/img/product/02.jpg"
                 }
               ]
               res.json(arr)
            })
        }
        
        //contentBase:__dirname + 'dist'
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:"./index.html"
        })
    ]
}