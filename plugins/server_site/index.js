import Vue from "vue";
import http from "./http.js";
import api from "~/config/api.js";

const install = function (VueClass, opts = {}) {
    // http method
    VueClass.api = api;
    VueClass.prototype.$api = api;

    // http method
    VueClass.http = http;
    VueClass.prototype.$http = http;
};
Vue.use(install);
