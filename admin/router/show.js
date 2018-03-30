let express=require("express"),
    route=express.Router(),
    utils=require("./utils");

/*  获取所有用户的dish  */
route.use(async function (req,res,next) {
   let data=await utils.readJSON("userData.json");
   req.resolve=data.persons;
    req.resolve.forEach((item)=>{
        delete item["allDish"];
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
    /*  */
    res.send(data);
});


module.exports=route;