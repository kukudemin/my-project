let express=require("express"),
    route=express.Router(),
    utils=require("./utils");

route.use(function (req,res,next) {
    utils.readJSON("LoginData.json").then(resolve=>{
        req.num=resolve.num;
        req.data=resolve.data;
    });
    next();
});
route.post("/login",(req,res)=>{
    let {id,pw}=req.query;

});
module.exports=route;