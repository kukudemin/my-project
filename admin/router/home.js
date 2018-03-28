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
route.get('/allStar',async function (req,res) {
    let data=await utils.readJSON("starAll.json");
    res.send(data);
});
route.get('/star',async function (req,res) {
    let data=await utils.readJSON("cookbook.json");

    res.send(data);
});

route.get('/recipe',async function (req,res) {
    let {id,dishNum}=req.query;
    let data=await utils.readJSON("userData.json");
  /*  let resolute=data.persons.find((item)=>{
        return item.id==id;
    }).allDish.find((item)=>{
        return item.num==dishNum;
    });*/
    let resolute= await utils.aryFind(data.persons,id,dishNum,"allDish");
    res.send(resolute);
});

module.exports=route;