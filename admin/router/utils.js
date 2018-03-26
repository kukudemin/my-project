let fs=require("fs"),
    path=require("path");


module.exports={
    readJSON(fileName){
        let filePath=`${path.resolve()}/mock/${fileName}`;
        return new Promise((resolve,reject)=>{
            fs.readFile(filePath,"utf-8",(err,data)=>{
                if (err){
                    reject(err);
                    return
                }
                resolve(JSON.parse(data));
                // resolve(data)
            })
        })
    }
}