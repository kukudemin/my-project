import axios from './index';

export function queryBanner() {
    return axios.get('/home/banner');
}
export function getStar() {
    return axios.get('/home/star');
}