<template>
    <div class="post-page">
        <h1 class="title">{{data.title}}</h1>
        <p class="createTime">{{data.create_time | timeFormat}}</p>
        <div  v-html="post" class="markdown-body" v-highlight></div>
    </div>
</template>

<script>
import marked from "marked";
import moment from "moment";
import Vue from "vue";
export default {
    validate ({ params }) {
        // Must be a number
        return /^\d+$/.test(params.id);
    },
    asyncData ({ params, error }) {
        return Vue.http.get(`${Vue.api.POST}/${params.id}`)
            .then(res => {
                return {
                    data: res.data
                };
            });
    },
    data () {
        return {};
    },
    computed: {
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
            margin-bottom: 30px;
            color: gray;
        }
    }
</style>
