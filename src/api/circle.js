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
