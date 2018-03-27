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
    console.log(1);
    res.send(data);
});
route.get('/recipe',async function (req,res) {
    let {id,dishNum}=req.query;
    let data=await utils.readJSON("userData.json");
    console.log(data);
    let resolute=data.persons.find((item)=>{
        return item.id==id;
    }).allDish.find((item)=>{
        return item.num==dishNum;
    });
    res.send(resolute);
});

module.exports=route;