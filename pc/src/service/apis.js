import axios from 'axios'
import {message} from 'antd';

let loadingFlag = false; // 加载控制

/**
 * isHideLoading 是否隐藏加载提示
 * params 传送数据
 */
/**
 * isHideLoading 是否隐藏加载提示
 * params 传送数据
 */
export function axiosRequest(api, method = 'GET', params, isHideLoading) {
    let token = {Authorization: sessionStorage.getItem('token')}
    if (token.Authorization === '') {
        window.location.href = '/401'
        return
    }
    // 条件显示加载提示
    if (!loadingFlag && !isHideLoading) {
        message.loading('数据加载中...', 0);
        loadingFlag = true;
    }
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: global.G_SERVER_HOST + api,
            headers: token,
            data: params
        })
            .then((res) => {
                if (res.data.errcode && res.data.errcode < 0) {
                    message.error(res.data.msg);
                    reject(res.data)
                    loadingFlag = false;
                    message.destroy();
                } else {
                    resolve(res.data);
                    loadingFlag = false;
                    message.destroy();
                }

            })
            .catch((error) => {
                message.destroy();
                if (error) {
                    message.error('服务端发生逻辑错误！');
                }
                reject(error);
            })
    })
}

// 获取数据
/**
 * test
 * */
export async function getToken() {
    return axiosRequest(`/test`, 'POST', null, false);
}
