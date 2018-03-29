const utils={
    //时间格式化
    //time 标准时间格式 ,时间字符串'2018-01-03
    formatTime(time,template='{0}-{1}-{2}'){

        if(typeof time==='object'){
            time=time.toLocaleString();
        }
        let reg=/\d+/g,
            ary=time.match(reg);
        ary=ary.map(item=>{
            return item<10?`0${item}`:item;
        });
        reg=/\{(\d+)\}/g;
        template=template.replace(reg,(...arg)=>{
            let index=arg[1],
                val=ary[index]||'00';
            return val
        });
        return template;
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
    /* 解析url*/
    urlToObj(url) {
    url = url.split("?")[1];
    return eval("({" + url.replace(/=/g, ":'").replace(/&/g, "',") + "'})");
}
};
export default utils;