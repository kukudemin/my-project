import axios from './index';

export function courseList() {
    return axios.get('/college/list');
}
export function courseData(id){
    return axios.get(`/college/detail?id=${id}`)
}
