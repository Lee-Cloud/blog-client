import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        isLogined: false,
        userInfo: {
            name: ""
        },
        loginBoxVisible: false
    },
    mutations: {
        changeLoginState (state, isLogined) {
            state.isLogined = isLogined;
        },
        changeLoginBoxVisible (state, visible) {
            state.loginBoxVisible = visible;
        },
        updateUserInfo (state, userInfo) {
            state.userInfo = userInfo;
        }
    },
    actions: {
        initUser ({ state, commit }) {
            const user = JSON.parse(localStorage.getItem("userInfo"));
            if (user) {
                state.userInfo = user;
            }
        },
        weiboLogin () {
            location.href = "https://api.weibo.com/oauth2/authorize?client_id=2623944265&response_type=code&redirect_uri=http://blog.lee-cloud.xyz/login";
            localStorage.setItem("beforeRedirectUri", location.pathname);
        },
        qqLogin () {
            location.href = "https://graph.qq.com/oauth2.0/authorize?client_id=101459855&response_type=code&redirect_uri=http://blog.lee-cloud.xyz/login/qq&state=web";
            localStorage.setItem("beforeRedirectUri", location.pathname);
        }
    }
});

export default store;
