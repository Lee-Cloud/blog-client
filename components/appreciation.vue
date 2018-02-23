<template lang="html">
    <div class="appreciation-wrap">
        <p>讨论请发邮件到 <a href="mailto:lewis1990@foxmail.com">lewis1990@foxmail.com</a> </p>
        <p>
            <i class="iconfont" :class="{'icon-like_fill': false, 'icon-like': true}"></i>
        </p>
        <p>喜欢的话点个赞咯</p>
        <p>微信扫描赞赏码赞助此文</p>
        <img :src="require('~/assets/images/appreciation.jpg')" alt="">
    </div>
</template>

<script>
import clLine from "~/components/line.vue";
export default {
    methods: {
        likes: function () {}
    },
    components: {
        clLine
    }
};
</script>

<style lang="less" scoped>
    .iconfont {
        font-size: 40px;
        cursor: pointer;
        &.icon-like_fill {
            color: #EA6F5A;
        }
    }
    .appreciation-wrap {
        width: 100%;
        margin-top: 60px;
        padding: 40px 0;
        text-align: center;
        border-top: 1px solid #ccc;
        > p {
            margin-bottom: 10px;
        }
        > img {
            width: 320px;
            max-width: 70%;
        }
    }
</style>
