import axios from './index';

export function courseList() {
    return axios.get('/college/list');
}