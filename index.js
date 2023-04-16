const express = require('express')
const path = require('path')
const cors = require('cors');
//解析html
var ejs =require('ejs');
var config = require('./config/defaulit');

const app = express()

//获取静态路径
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/data'));

//设置跨域
app.use(cors());

//加入html视图
app.engine('html', ejs.__express);
app.set('view engine', 'html');

//解析前端数据
app.use(express.json());
app.use(express.urlencoded({ extended:true}))

//引入路由
require('./routes/index')(app);

app.listen(config.port,()=>{
    console.log(`启动服务器${config.port}`);
})