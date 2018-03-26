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
    }
};
export default utils;