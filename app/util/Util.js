//合并对象 override是否覆盖相同的属性
function mergeObj(des, src, override){
    var result = {};
    for( var key in des){
        result[key] = des[key];
    }
    for( var key in src){
        if(override || !(key in des)){
            result[key] = src[key];
        }
    }
    return result;
}

module.exports = {
    mergeObj:mergeObj
}
