import axios from './index';

export function queryBanner() {
    return axios.get('/home/banner');
}