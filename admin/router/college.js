let express=require('express'),
    route=express.Router(),
    utils=require('./utils');

route.use(async function (req,res,next) {
    req.resolve=await utils.readJSON("courseList.json");
    next();
});
route.get('/list',(req,res)=>{
    res.send(req.resolve);
});
/*route.get('/detail',(req,res)=>{
    let {id,num}=req.query;
    let data=req.resolve.find((item)=>{
        return item.id==id;
    }).course.find((item)=>{
        return item.num==num;
    });
    res.send(data);
});*/
route.get('/detail',async (req,res)=>{
    let {id}=req.query;

    let data=await utils.aryFind(req.resolve,id,"course");

    res.send(data);
});

module.exports=route;