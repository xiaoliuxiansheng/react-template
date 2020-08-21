/**
 * @name: global
 * @author: LIULIU
 * @date: 2020-08-21 10:59
 * @description：global 基础配置信息
 * @update: 2020-08-21 10:59
 */

let SERVER_HOST = '127.0.0.1:6666'; //后端接口地址

global.G_SERVER_HOST = SERVER_HOST;
// 防抖
global.G_DEBOUNCE = (fn, wait) => {
    var timeout = null;
    return function () {
        if (timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
    }
}

// 节流
global.G_THROTTLE = (func, delay) => {
    var prev = Date.now();
    return function () {
        var context = this;
        var args = arguments;
        var now = Date.now();
        if (now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    }
}

// 访问设备类型
global.BROWSER = () => {
    let uA = navigator.userAgent.toLowerCase();

    let ipad = uA.match(/ipad/i) == "ipad";
    let iphone = uA.match(/iphone os/i) == "iphone os";
    let midp = uA.match(/midp/i) == "midp";
    let uc7 = uA.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    let uc = uA.match(/ucweb/i) == "ucweb";
    let android = uA.match(/android/i) == "android";
    let windowsce = uA.match(/windows ce/i) == "windows ce";
    let windowsmd = uA.match(/windows mobile/i) == "windows mobile";

    let isMobile = (ipad || iphone || midp || uc7 || uc || android || windowsce || windowsmd) ? true : false;

    return {
        ipad,
        iphone,
        midp,
        uc7,
        uc,
        android,
        windowsce,
        windowsmd,
        isMobile
    }

}
