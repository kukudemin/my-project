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
            })
        })
    },
    aryFind(ary1,id,num,ary2){
        return new Promise((resolve,reject)=>{
           ary1=ary1.find((item)=>{
                return item["id"]==id;
            });
            resolve(ary1);
        }).then((resolve)=>{
            if(ary2){
                return resolve[ary2].find((item)=>{
                    return item["num"]==num;
                })
            }else {
                return resolve;
            }
        })
    },
    writeJSON(data,pathName){
        let filePath=`${path.resolve()}/mock/${pathName}`,
            str=typeof data!=="string"?JSON.stringify(data):data;
        return new Promise((resolve,reject)=>{
            fs.writeFile(filePath,str,"utf-8",(err)=>{
                if(err){
                    reject(err);
                }
                resolve();
            })
        })

    }
}