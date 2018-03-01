<template>
    <div class="home-page">
        <cl-line title="ALL POSTS"></cl-line>
        <ul class="posts-list">
            <li v-for="post in posts" :key="post.id">
                <nuxt-link class="title" :to="`/post/${post.id}/${post.slug}`">{{post.title}}</nuxt-link>
                <span class="createTime">{{post.create_time | timeFormat}}</span>
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
            const res = await Vue.http.get(`${Vue.api.POST}?classify=${classify}&orderby=${orderby}`);
            if (res.success) {
                posts = res.data;
            }
        } catch (e) {
            error({ statusCode: 500, message: "出错啦" });
        }
        posts.forEach(item => {
            item.slug = pinyin(item.title, { style: pinyin.STYLE_NORMAL }).join("-");
        });
        return {
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
                    content: "Lewis1990@Amoys是本人全栈开发的个人博客，采用KOA2 + NUXT.js的服务端渲染方案"
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
    methods: {},
    components: {
        clLine
    }
};
</script>

<style lang="less" scoped>
    .home-page {
        padding: 0 10px;
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
                    color: #555;
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
