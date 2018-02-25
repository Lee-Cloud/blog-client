import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        isLogined: false,
        userInfo: {
            name: ""
        }
    },
    mutations: {
        changeLoginState (state, isLogined) {
            state.isLogined = isLogined;
        },
        updateUserInfo (state, userInfo) {
            state.userInfo = userInfo;
        }
    },
    actions: {
        redirect () {
            location.href = "https://api.weibo.com/oauth2/authorize?client_id=2623944265&response_type=code&redirect_uri=http://blog.lee-cloud.xyz/login";
            localStorage.setItem("beforeRedirectUri", location.pathname);
        }
    }
});

export default store;
