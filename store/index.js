import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        guest: {
            fp: "",
            likes: []
        }
    },
    mutations: {
        identify_guest(state, payload) {
            if (payload && payload.fp) {
                state.guest.fp = payload.fp;
            }
            if (payload && payload.likes) {
                state.guest.likes = payload.likes;
            }
        }
    }
});

export default store;
