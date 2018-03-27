let express=require('express'),
    route=express.Router();
let utils=require('./utils');

/* 获取 */
route.get('/allData',(req,res)=>{
    utils.readJSON("userData.json").then((resolve)=>{
        res.send(resolve);
    }).catch((err)=>{
        console.log(err);
    })
});

module.exports=route;