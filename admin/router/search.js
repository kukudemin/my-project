let express=require("express"),
    route=express.Router(),
    utils=require("./utils");

route.use(async function (req,res,next) {
    req.dish=await utils.readJSON("userData.json");
    req.que=await utils.readJSON("question.json");
    next();
});

route.get("/detail",function (req,res) {
    let {type,key}=req.query;
    console.log(key);
    if(type==="dish"){
        let ary=req.dish.persons;
        let ary1=[];
       ary.filter((item)=>{
           let ary2=item.allDish.filter((item)=>{
               return item.title.includes(key);
           });
           if(ary2.length>0){
               item.allDish=ary2;
               ary1.push(item);
               return true;
           }
               return false;
       });
        res.send(ary1);
    }
    if(type==="que"){
        let ary=req.que;
        ary=ary.filter((item)=>{
            return item.question.includes(key);
        });
        res.send(ary);
    }
});


module.exports=route;