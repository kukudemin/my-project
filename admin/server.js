const express=require('express'),
    bodyParse=require('body-parser'),
    app=express();
let port=8000;
app.listen(port,()=>{
    console.log("create port 8000");
});
app.use(function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if(req.method==='OPTIONS'){
        res.send('YES');
        return;
    }
    next();
});
app.use(bodyParse.urlencoded({extended:false}));
app.use('/home',require("./router/home"));
app.use('/college',require("./router/college"));
app.use('/show',require("./router/show"));
app.use('/question',require("./router/question"));

