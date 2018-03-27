import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;
axios.interceptors.response.use(result => {
    return result.data;
});
export default axios