/**
 * Created by 1ping on 2016/10/21.
 */
"use strict";

var Util = require('../util/Util')

const baseUrl = "http://117.29.166.222:8090";
const urls = {
    baseUrl:baseUrl,
    Get_Dynamic_Home:baseUrl+"/home/setting/getDynamicHome",
}
//请求基本参数
const baseParams = {
    ver:"1"
};

function getDynamicHome(params,callBackSuccess,callBackFail){
    httpFetch(urls.Get_Dynamic_Home,params,'post',callBackFail).then(callBackSuccess);
}

//合并对象 外部传入默认覆盖原有的参数
function mergeParams(des, src){
    return Util.mergeObj(des, src,true);
}

async function httpFetch(url, params, method,callBackFail) {
    method = method ? method : 'post';
    params = mergeParams(params ? params : {},baseParams);
    return fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }).then((response) => {
        return response.json();
    }).catch((err) => {
        callBackFail(err);
    });
}


module.exports = {
    urls: urls,
    getDynamicHome:getDynamicHome,
}
