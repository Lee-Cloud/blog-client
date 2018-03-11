<template lang="html">
    <ul class="list">
        <li class="item" v-for="item in comments" :key="item.id">
            <img :src="`/avatars1/${item.avatar}.png`" alt="">
            <div class="content">
                <p class="name">来自{{item.city}}的网友：</p>
                {{item.content}}
                <p class="info">{{item.create_time}}</p>
            </div>
        </li>
    </ul>
</template>

<script>
import moment from "moment";
export default {
    props: ["data"],
    data () {
        return {};
    },
    computed: {
        comments: function () {
            const comments = JSON.parse(JSON.stringify(this.data));
            for (let i = 0; i < comments.length; i++) {
                comments[i].create_time = moment(comments[i].create_time).fromNow();
            }
            return comments;
        }
    }
};
</script>

<style lang="less" scoped>
    .list {
        .item {
            display: flex;
            padding: 0 10px 6px 10px;
            margin-bottom: 10px;
            border-bottom: 1px dashed #ccc;
            > img {
                width: 40px;
                height: 40px;
                margin-right: 20px;
                border-radius: 50%;
            }
            > div.content {
                flex: 1;
                font-size: 14px;
                > p.name {
                    margin-bottom: 2px;
                }
                > p.info {
                    margin-top: 2px;
                    font-size: 12px;
                    text-align: right;
                }
            }
        }
    }
</style>
