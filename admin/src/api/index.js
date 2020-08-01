import axios from 'axios'
let request = axios.create({
    baseURL: 'http://localhost:3030/admin/api',
    timeout: 51000,
});
//请求拦截
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
//响应拦截
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});
export default request