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
    /*let resolute=data.persons.find((item)=>{
        return item.id==id;
    }).allDish.find((item)=>{
        return item.num==dishNum;
    });*/
    let dataInfo =await utils.aryFind(data.persons,id);
     let resolute= await utils.aryFind(data.persons,id,dishNum,"allDish");
    resolute={...resolute,author:dataInfo.author,ico:dataInfo.ico};
    res.send(resolute);
});

route.post('/detail/remind',async function (req,res) {
    let {id,dishNum ,img,clientName}=req.body;
    let data=await utils.readJSON("userData.json");
    let dataInfo =await utils.aryFind(data.persons,id);
    let resolute= await utils.aryFind(data.persons,id,dishNum,"allDish");
   /* resolute={...resolute,author:dataInfo.author,ico:dataInfo.ico};*/
    /*  修改数据条数  */
    resolute.remindPoint.count=parseInt(resolute.remindPoint.count)+1;
    /* 传递参数和头像 */  /*  重新写入文件  刷新或是重新登录时可以看到   */
    resolute.remindPoint.data=[{clientName:clientName,img:img},...resolute.remindPoint.data];

    dataInfo.allDish[dishNum].remindPoint=resolute.remindPoint;
    data.persons[id-1]=dataInfo;
    utils.writeJSON(data,"userData.json");
    res.send("success");
});

route.post('/detail/comment',async function (req,res) {
    let {id,dishNum ,comment}=req.body;
    let data=await utils.readJSON("userData.json");
    let dataInfo =await utils.aryFind(data.persons,id);
    let resolute= await utils.aryFind(data.persons,id,dishNum,"allDish");
    resolute.comment=comment;
    dataInfo.allDish[dishNum].comment=resolute.comment;
    data.persons[id-1]=dataInfo;
    dataInfo.allDish[dishNum].comment=resolute.comment;
    utils.writeJSON(data,"userData.json");
    res.send("success");
});
module.exports=route;