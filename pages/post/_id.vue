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
            {{likes || 0}}
            &nbsp;&nbsp;
            <i class="iconfont icon-interactive_fill"></i>
            <!-- 评论 -->
            {{data.comments || 0}}
        </p>
        <div  v-html="post" class="markdown-body" v-highlight></div>
        <no-ssr>
            <appreciation :postId="$route.params.id" :like_ids="data.like_ids || ''"></appreciation>
        </no-ssr>
        <!-- <div class="comment-box">
            <p class="total"><span>{{comments.length}}条评论</span></p>
            <comment-box @comfirm="leaveMessage"></comment-box>
            <comment-list :data="comments"></comment-list>
        </div> -->
    </div>
</template>

<script>
import marked from "marked";
import moment from "moment";
import Vue from "vue";
import appreciation from "~/components/appreciation.vue";
import commentBox from "~/components/comment-box.vue";
import commentList from "~/components/comment-list.vue";
import NoSSR from "vue-no-ssr";
export default {
    layout: "blog",
    validate ({ params }) {
        // 校验文章id是否为数字
        return /^\d+$/.test(params.id);
    },
    async asyncData ({ params, error }) {
        // 获取文章详情
        let data = {};
        try {
            data = await Vue.http.get(`post/${params.id}`);
            return {
                data: data
            };
        } catch (e) {
            error({ statusCode: 404, message: "出错啦" });
        }
    },
    fetch ({ store, params }) {},
    data () {
        return {
            comments: []
        };
    },
    computed: {
        // markdown文章内容转化为html
        post: function () {
            return marked(this.data.content);
        },
        likes: function () {
            const likes = this.data.like_ids || "";
            return likes.split(",").filter(item => {
                return item;
            }).length;
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
    mounted () {},
    methods: {
        leaveMessage: function (val) {
            const data = {
                post_id: this.post.id,
                ...val
            };
            this.$axios.post(this.$api.PUBLIC_COMMENTS, data).then(res => {
                if (res.success) {
                    this.getComments();
                }
            }).catch(err => {
                console.error(err);
            });
        },
        getComments: function () {
            this.$axios.get(`${this.$api.PUBLIC_COMMENTS}/${this.post.id}`).then(res => {
                if (res.success) {
                    this.comments = res.data;
                }
            }).catch();
        }
    },
    components: {
        appreciation,
        commentBox,
        commentList,
        NoSSR
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

        .comment-box {
            margin-top: 40px;
            .total {
                position: relative;
                > span {
                    position: relative;
                    background-color: white;
                    padding-right: 8px;
                    z-index: 2;
                }
                &::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 50%;
                    width: 100%;
                    border-top: 1px solid #ccc;
                }
            }
        }
    }
</style>
