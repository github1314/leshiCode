// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/index';

import axios from 'axios';
import qs from 'qs';
import validate from './assets/validate'

import outils from 'outils'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);
/* eslint-disable no-new */

// js工具
Vue.prototype.oi = outils;
Vue.prototype.qs = qs;
//验证规则
Vue.prototype.$v = validate;


// 在这句话之前写
Vue.prototype.$http = axios;
Vue.prototype.$http.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';


// 隐藏手机号中间4位的过滤器
Vue.filter('PrivacyPhone', (value) => {
    value += '';
    if (value.length === 11) {
        return value.substr(0, 3) + '****' + value.substr(7, 11);
    } else {
        return value;
    }
});

// 银行卡号格式化过滤器
Vue.filter('bankNumber', (value) => {
    let thisNumber=value+'',
        newStr = '';
    for(let i=0; i<thisNumber.length; i++) {
        if(i!==0 && i%4===0) {
            newStr += " ";
        }
        newStr += thisNumber[i];
    }
    return newStr;
});

// 银行卡号格式化过滤器
Vue.filter('yymmdd', (obj) => {
    let date =  new Date(obj);
    let y = 1900+date.getYear();
    let m = "0"+(date.getMonth()+1);
    let d = "0"+date.getDate();
    return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
});



// 货币过滤器
Vue.filter('currency', function (value, _currency, decimals) {
    value = parseFloat(value);
    if (!isFinite(value) || !value && value !== 0) return '';
    _currency = _currency != null ? _currency : '$';
    decimals = decimals != null ? decimals : 2;
    let stringified = Math.abs(value).toFixed(decimals);
    let _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
    let i = _int.length % 3;
    let head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
    let _float = decimals ? stringified.slice(-1 - decimals) : '';
    let sign = value < 0 ? '-' : '';
    let digitsRE = /(\d{3})(?=\d)/g;
    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
});


const state = {};


new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});

