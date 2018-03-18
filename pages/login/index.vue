<template lang="html">
    <div class="">
        <page-loader></page-loader>
    </div>
</template>

<script>
import Vue from "vue";
import pageLoader from "~/components/pageLoader.vue";
export default {
    layout: "fullpage",
    validate ({ query }) {
        // 检验微博登录code是否存在
        return query.code;
    },
    data () {
        return {
            tokens: {},
            userInfo: {}
        };
    },
    async mounted () {
        await this.getToken();
        this.login();
    },
    methods: {
        getToken: async function () {
            await this.$http.get(`${this.$api.WEIBO_TOKEN}?code=${this.$route.query.code}`)
                .then(res => {
                    if (res.success) {
                        this.tokens = res.data;
                        localStorage.setItem("weiboToken", JSON.stringify(this.tokens));
                    } else {
                        // 登录失败
                    }
                }).catch(err => {});
        },
        login: function () {
            this.$http.post(this.$api.WEIBO_LOGIN, {
                access_token: this.tokens.access_token,
                uid: this.tokens.uid
            }).then(res => {
                if (res.success) {
                    this.$store.commit("updateUserInfo", res.data.userInfo);
                    this.$store.commit("changeLoginState", true);
                    localStorage.setItem("userInfo", JSON.stringify(res.data.userInfo));
                    const beforeRedirectUri = localStorage.beforeRedirectUri;
                    this.$router.replace(beforeRedirectUri);
                } else {
                    this.$router.replace("/");
                    alert("登录失败，不要问我为什么！");
                }
            }).catch(err => {
                this.$router.replace("/");
                alert("登录失败，不要问我为什么！");
            });
        }
    },
    components: {
        pageLoader
    }
};
</script>

<style lang="less" scoped>
</style>
