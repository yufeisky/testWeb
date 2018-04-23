// const img = require('../img/default_avatar.png');

export function getLiverId() {
    return (/[?&]userId=([0-9]+)/.exec(window.location.search) || [])[1];
}
export function getId() {
    return (/[?&]id=([0-9]+)/.exec(window.location.search) || [])[1];
}

export function getRedEnvelopeHost() {
    const host = getSearchParam("redEnvelopeHost");
    return host ? host : "";
}
export function getPassToken() {
    return getSearchParam("token");
}

export function getSearchParam(key) {
    return (new RegExp(`[?&]${key}=([^&]+)`).exec(window.location.search) || [])[1];
}

export function getSwitch(key) {
    return new RegExp(`[?&]${key}=true`).test(window.location.search);
}

export function getWrapEl() {
    return document.getElementById("wrap");
}

/*
 * url 目标url
 * param 需要替换的参数名称
 * paramVal 替换后的参数的值
 * 返回值为新的url
 * example: updateURLParameter('www.baidu.com?id=12','id','13') 返回结果为 'www.baidu.com?id=13'
 */

export function updateURLParameter(url, param, paramVal) {
    var newAdditionalURL = "";
    var tempArray = url.toString().split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";
    if (additionalURL) {
        tempArray = additionalURL.split("&");
        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i].split('=')[0] != param) {
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }
    }

    var rows_txt = temp + "" + param + "=" + paramVal;
    return baseURL + "?" + newAdditionalURL + rows_txt;
}

// 返回正确的头像图片
export function getImgUrl(url, size = '50x50') {
    if (typeof url == 'string' && url.length > 4) {
        return url.replace(/.(jpg|png|gif|jpeg|bmp)$/, `_${size}.$1`);
    } else {
        return img;
    }
}

// 获取时间
export function getTime(timeStamp) {
    let time = parseInt(timeStamp / 1000, 10);
    let day = parseInt(time / 86400, 10);
    time -= day * 86400;
    let hour = parseInt(time / 3600, 10);
    time -= hour * 3600;
    let minute = parseInt(time / 60, 10);
    time -= minute * 60;
    let second = time;

    return {
        day: day,
        hour: hour,
        minute: minute,
        second: second
    };
}