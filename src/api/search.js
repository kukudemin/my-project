import axios from './index';
export  function getResolute(type,key) {
    return axios.get(`/search/detail?type=${type}&key=${key}`);
}