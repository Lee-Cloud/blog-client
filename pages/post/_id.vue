<template>
    <div class="post-page">
        <h1 class="title">{{data.title}}</h1>
        <p class="createTime">{{data.create_time | timeFormat}}</p>
        <p class="count">
            <i class="iconfont icon-view"></i>
            <!-- 阅读 -->
            {{data.hits}}
            &nbsp;&nbsp;
            <i class="iconfont icon-like_fill"></i>
            <!-- 喜欢 -->
            {{data.likes || 0}}
            &nbsp;&nbsp;
            <i class="iconfont icon-interactive_fill"></i>
            <!-- 评论 -->
            {{data.comments || 0}}
        </p>
        <div  v-html="post" class="markdown-body" v-highlight></div>
        <appreciation></appreciation>
    </div>
</template>

<script>
import marked from "marked";
import moment from "moment";
import Vue from "vue";
import appreciation from "~/components/appreciation.vue";
import Fingerprint2 from "fingerprintjs2";
export default {
    validate ({ params }) {
        // 校验文章id是否为数字
        return /^\d+$/.test(params.id);
    },
    asyncData ({ params, error }) {
        // 获取文章详情
        return Vue.http.get(`${Vue.api.POST}/${params.id}`)
            .then(res => {
                if (res.success) {
                    return {
                        data: res.data
                    };
                } else {
                    error({ statusCode: 404, message: "该文章不存在或已被删除" });
                }
            }).catch(err => {
                error({ statusCode: 500, message: "出错啦" });
            });
    },
    fetch ({ store, params }) {
        // if (store.state.guest.fp) {
        //     new Fingerprint2().get((result, components) => {
        //         fp = result;
        //         localStorage.setItem("fp", fp);
        //     });
        // }
        // store.commit("identify_guest", {
        //     fp: fp
        // });
    },
    data () {
        return {};
    },
    computed: {
        // markdown文章内容转化为html
        post: function () {
            return marked(this.data.content);
        }
    },
    head () {
        return {
            title: `${this.data.title} - Lewis1990@Amoy`,
            meta: [
                {
                    name: "description",
                    content: this.data.description || this.data.title
                }
            ]
        };
    },
    filters: {
        timeFormat: function (time) {
            if (!time) return "";
            return moment(time).format("DD,MMMM,YYYY");
        }
    },
    mounted () {
        this.identifyGuest();
    },
    methods: {
        // 获取设备指纹
        identifyGuest: function() {
            if (!this.$store.state.guest.fp) {
                let fp = localStorage.fp || "";
                if (!fp) {
                    new Fingerprint2().get((result, components) => {
                        fp = result;
                        this.$store.commit("identify_guest", {
                            fp: fp
                        });
                        localStorage.setItem("fp", this.$store.state.guest.fp);
                        this.setGuest(fp);
                    });
                } else {
                    this.setGuest(fp);
                }
            }
        },
        getGuestLikes: function (fp) {
            this.$http.get(`${this.$api.GUEST}/${fp}`)
                .then(res => {
                    if (res.success) {
                        this.$store.commit("identify_guest", {
                            likes: res.data.likes
                        });
                    }
                }).catch(err => {});
        },
        setGuest: function (fp) {
            console.log("注册游客中...", fp);
            this.$http.post(`${this.$api.GUEST}/${fp}`);
        }
    },
    components: {
        appreciation
    }
};
</script>

<style lang="less" scoped>
    .post-page {
        padding: 0 20px;
        > .title {
            margin-bottom: 10px;
        }
        > .createTime {
            margin-bottom: 10px;
            color: gray;
        }
        > .count {
            margin-bottom: 30px;
            color: gray;
        }
    }
</style>
