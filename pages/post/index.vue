<template>
    <div class="posts-page">
        <cl-line :title="'POSTS (' + posts.length + ')'"></cl-line>
        <p class="sort">
            <span>排序：</span>
            <span :class="{ active: orderby === 'hits'}" @click="getPosts('', 'hits')">点击量</span>
            <!-- <span :class="{ active: orderby === 'likes'}" @click="getPosts('', 'likes')">喜欢</span> -->
            <span  :class="{ active: orderby === 'create_time'}" @click="getPosts('', 'create_time')">发布时间</span>
        </p>
        <ul class="posts-list">
            <li v-for="post in posts" :key="post.id">
                <nuxt-link class="title" :to="`/post/${post.id}/${post.slug}`">{{post.title}}</nuxt-link>
                <span class="createTime" v-show="orderby === 'create_time'">{{post.create_time | timeFormat}}</span>
                <span class="createTime" v-show="orderby === 'hits'">（{{post.hits}}）</span>
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from "vue";
import moment from "moment";
import clLine from "~/components/line.vue";
import pinyin from "pinyin";
export default {
    layout: "blog",
    async asyncData ({ query, error }) {
        const classify = query.classify || "";
        const orderby = query.orderby || "hits";
        let posts = [];
        try {
            const res = await Vue.http.get(`post?classify=${classify}&orderby=${orderby}&limit=999`);
            posts = res.rows;
        } catch (e) {
            error({ statusCode: 500, message: "出错啦" });
        }
        posts.forEach(item => {
            item.slug = pinyin(item.title, { style: pinyin.STYLE_NORMAL }).join("-");
        });
        return {
            classify: classify,
            orderby: orderby,
            posts: posts
        };
    },
    data () {
        return {};
    },
    head () {
        return {
            meta: [
                {
                    name: "description",
                    content: "Lewis1990@Amoy全部文章列表"
                }
            ]
        };
    },
    mounted () {},
    filters: {
        timeFormat: function (time) {
            if (!time) return "";
            return `（${moment(time).format("MMMM YYYY")}）`;
        }
    },
    methods: {
        getPosts: async function (classify, orderby) {
            this.classify = classify;
            this.orderby = orderby;
            try {
                const res = await Vue.http.get(`post?classify=${classify}&orderby=${orderby}&limit=999`);
                res.rows.forEach(item => {
                    item.slug = pinyin(item.title, { style: pinyin.STYLE_NORMAL }).join("-");
                });
                this.posts = res.rows;
            } catch (e) {
                console.log("获取失败:", e);
            }
        }
    },
    components: {
        clLine
    }
};
</script>

<style lang="less" scoped>
    .posts-page {
        padding: 0 20px;

        p.sort {
            margin-bottom: 10px;
            > span {
                margin-right: 20px;
                &:not(:first-child) {
                    cursor: pointer;
                    &.active {
                        color: #111;
                        font-weight: bold;
                    }
                }
            }
        }

        ul.posts-list {
            margin-bottom: 30px;
            padding: 0 10px;
            list-style: none;
            > li {
                margin-bottom: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                .title {
                    color: #333;
                    cursor: pointer;
                    text-decoration: underline;
                }
                .createTime {
                    font-size: 12px;
                }
            }
        }

        ul.links {
            list-style: none;
            li {
                > span {
                    font-weight: bold;
                }
                > a {
                    color: #555;
                    text-decoration: underline;
                }
            }
        }
    }
</style>
