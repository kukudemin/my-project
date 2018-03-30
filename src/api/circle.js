import axios from './index';

/* 所有最新动态  */
export function getNew() {
    return axios.get('/show/list');
}
/*根据id  (number获取) 具体的哪一个动态 */
export function getOneNew(id) {
    return axios.get('/show/list',id);
}


/*  获取所有达人的动态 列表  */
export function allMaster() {
    return axios.get('/circle/list');
}

/*  食谱详情页  */
export function cookDetail(id,dishNum) {
    return axios.get('/circle/detail',id,dishNum);
}

/*   点赞传递参数 第几认的第几个食谱  我的信息: 用户名头像  */
export function cookZan(id,dishNum,imgMy,nameMy) {
    return axios.post('/circle/detail',id,dishNum,imgMy,nameMy);
}
