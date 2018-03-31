let express=require("express"),
    route=express.Router(),
    utils=require("./utils");

let md5 = require('blueimp-md5');

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
        req.session.loginID = info['id'];
       // res.send('success');
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
route.get('/info', function (req, res) {
    //=>客户端如果传递ID就是想看别人的信息，不传递ID，就是想看自己的信息（前提是已经登录，没有登录返回错误即可）
    let userId = req.query.id || req.session.loginID || 0,
        data = req.data.find(item => {
            return item.id == userId;
        });
    res.send(data || '查无此人');
});
module.exports=route;