import axios from './index';

let md5 = require('blueimp-md5');

export function login(userName, userPass) {
    return axios.post('/profile/login', {
        userName: userName,
        pw: md5(userPass)
    });
}

export function isLogin() {
    return axios.get('/profile/login');
}

export function register(userName, userPass) {
    return axios.post('/profile/register', {
        userName: userName,
        pw: md5(userPass)
    });
}

export function info() {
    return axios.get('/profile/info');
}