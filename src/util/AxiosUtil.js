import axios from 'axios';
import querystring from 'querystring';

// axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.timeout = 20000;
axios.defaults.withCredentials = true;

/**
 * 配置请求拦截器
 */
axios.interceptors.request.use(
    config => {
        config.headers = {
            'respType': 'wrapper',
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        return config;
    },
    error => {
        console.log('请求错误');
        return Promise.resolve(error);
    }
);

/**
 * 配置响应拦截器
 */
axios.interceptors.response.use(
    response => {

        return response;
    },
    error => {
        if(error && error.response){
            switch(error.response.status){
                case 400:
                    console.log('错误请求');
                    break;
                case 401:
                    console.log('未授权，请重新登录');
                    break;
                case 403:
                    console.log('拒绝访问')
                    break;
                case 404:
                    console.log('请求错误,未找到该资源');
                    break;
                case 405:
                    console.log('请求方法未允许');
                    break;
                case 408:
                    console.log('请求超时');
                    break;
                case 500:
                    console.log('服务器端出错');
                    break;
                case 501:
                    console.log('网络未实现');
                    break;
                case 502:
                    console.log('网络错误');
                    break;
                case 503:
                    console.log('服务不可用');
                    break;
                case 504:
                    console.log('网络超时');
                    break;
                case 505:
                    console.log('http版本不支持该请求');
                    break;
                default:
                    console.log(`连接错误${err.response.status}`);
            }
        }else{
            console.log('连接到服务器失败');
        }
        return Promise.resolve(error);
    }
);


/**
 * 网络请求 get
 * @param {string} url 相对路径
 * @param {object} params 请求参数
 * @param {object} config  请求配置
 */
export const get = (url, params = {}, config = {}) => {
    return new Promise((resolve, reject) => {
        let cond = [];
        let cond2 = {};
        Object.keys(config).length === 0 ? null : Object.assign(cond2, config);
        Object.keys(params).length === 0 ? null : Object.assign(cond2, {params: params});
        cond.push(url);
        Object.keys(cond2).length === 0 ? null : cond.push(cond2);
        axios.get(...cond).then(response => resolve(response.data)).catch(error => reject(error));
    });
};

/**
 * 网络请求文件 get
 * @param {string} url 相对路径
 */
export const get_download = url => {
    return new Promise((resolve, reject) => {
        let config = {};
        Object.assign(config, {responseType: 'stream'});
        Object.assign(config, {headers: {'Content-Type':'application/x-www-form-urlencoded'}});
        axios.get(url, config).then(response => resolve(response.data)).catch(error => reject(error));
    });
};

/**
 * 网络请求 post
 * @param {string} url 相对路径
 * @param {object} data 请求数据
 * @param {object} config 请求配置
 */
export const post = (url, data, config = {}) => {
    return new Promise((resolve, reject) => {
        let cond = [];
        cond.push(url);
        cond.push(querystring.stringify(data));
        Object.keys(config).length === 0 ? null : cond.push(config);
        axios.post(...cond).then(response => resolve(response.data)).catch(error => reject(error));
    });
};

/**
 * 网络上传文件
 * @param {*} url 相对路径
 * @param {*} data 数据
 */
export const post_upload = (url, data) => {
    return new Promise((resolve, reject) => {
        let cond = [];
        let cond2 = {};
        Object.assign(cond2, {data: data}, {headers: {'Content-Type': 'multipart/form-data'}});
        cond.push(url);
        cond.push(cond2);
        axios.post(...cond).then(response => resolve(response.data)).catch(error => reject(error));
    });
};

/**
 * 执行并发网络请求
 * @param  {...any} func 多调用函数
 */
export const all = (...func) => {
    return new Promise((resolve, reject) => {
        axios.all(func).then(axios.spread((...results) => resolve(...results))).catch(error => reject(error));
    });
};
