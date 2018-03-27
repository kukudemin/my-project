let express=require("express"),
    route=express.Router(),
    utils=require("./utils");
route.use(async function (req,res,next) {
    req.resolve=await utils.readJSON("question.json");
    next();
});
route.get("",function (req,res) {
    res.send(req.resolve);
});
module.exports=route;