let express=require("express"),
    route=express.Router(),
    utils=require("./utils");

route.use(async function (req,res,next) {
    let data=await utils.readJSON("userData.json");
    req.resolve=data.persons;
    req.resolve.forEach((item)=>{
        delete item["allWorks"];
    });
    next();
});

route.get("/list",function (req,res) {
    let data=req.resolve;
    res.send(data);
});
route.post("/list",async function (req,res) {
    let {id}=req.body;
    let data=await utils.aryFind(req.resolve,id);
    res.send(data);
});

route.get('/detail',async function (req,res) {
    let {id,dishNum}=req.query;
    let data=await utils.readJSON("userData.json");
    let resolute=data.persons.find((item)=>{
        return item.id==id;
    }).allDish.find((item)=>{
        return item.num==dishNum;
    });
    /* let resolute= await utils.aryFind(data.persons,id,dishNum,"allDish");*/
    res.send(resolute);
});

module.exports=route;