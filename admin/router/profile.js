let express=require("express"),
    route=express.Router(),
    utils=require("./utils");

route.use(function (req,res,next) {
    utils.readJSON("LoginData.json").then(resolve=>{
        req.num=resolve.num;
        req.data=resolve.data;
        next();
    });

});
route.post("/login",(req,res)=>{
    let {userName,pw}=req.body;
    let info=req.data.find((item)=>{
        return (item.userName===userName)&&(item.pw===pw);
    });
    if(info){
       req.session.userId=info.id;
       res.send("登录成功");
    }else {
        res.send("账号或者密码不对");
    }
});
route.get("/login",(req,res)=>{
    res.send(req.session.userId+""||"0");
});
route.post("/register",(req,res)=>{
    let info=req.data.find((item)=>{
        return item.userName===req.body.userName
    });
    if(info){
        res.send("该用户已经注册");
    }else{
        req.body.id=++req.num;
        req.data.push(req.body);
        utils.writeJSON({
            num:req.num,
            data:req.data
        },"LoginData.json").then(()=>{
            req.session.userId=req.num;
            res.send("注册成功");
        }).catch((err)=>{
            console.log(err);
        })
    }
});
module.exports=route;