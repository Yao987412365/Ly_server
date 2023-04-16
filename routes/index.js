const controller = require('../controller/dbServe')

module.exports = function(app){
    app.get('/text',(req,res)=>{
        res.send('233')
    })
    //新建wall数据
    app.post('/inserWall',(req,res)=>{
        controller.inserWall(req,res)
    })
    //新建反馈
    app.post('/insertFeedback',(req,res)=>{
        controller.insertFeedback(req,res)
    })
    //新建评论
    app.post('/insertComment',(req,res)=>{
        controller.insertComment(req,res)
    })
    // 删除墙
    app.post('/deletWall',(req,res)=>{
        controller.deletWall(req,res)
    })
    // 删除反馈
    app.post('/deleteFeedback',(req,res)=>{
        controller.deleteFeedback(req,res)
    })
    //删除评论
    app.post('/deletecomments',(req,res)=>{
        controller.deletecomments(req,res)
    })
    //分页查
    app.post('/findWallPage',(req,res)=>{
        controller.findWallPage(req,res)
    })
    //倒叙分页查墙评论
    app.post('/findCommentPage',(req,res)=>{
        controller.findCommentPage(req,res)
    })
    //用户进入进行IP等级
    app.post('/signip',(req,res)=>{
        var ip = req.ip;
        res.send({
            code:200,
            ip:ip
        })
    })
}