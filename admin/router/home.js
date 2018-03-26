let express=require('express'),
    route=express.Router();
let utils=require('./utils');

route.get('/banner',(req,res)=>{
    utils.readJSON("bannerData.json").then((resolve)=>{
        res.send(resolve);
    }).catch((err)=>{
        console.log(err);
    })
});
route.get('/star',async function (req,res) {
    let data=await utils.readJSON("cookbook.json");
   res.send(data);
});

module.exports=route;