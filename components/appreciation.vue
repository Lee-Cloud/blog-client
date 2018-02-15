<template lang="html">
    <div class="appreciation-wrap">
        <p>微信扫描赞赏码赞助此文</p>
        <img :src="require('~/assets/images/appreciation.jpg')" alt="">
    </div>
</template>

<script>
import clLine from "~/components/line.vue";
export default {
    components: {
        clLine
    }
};
</script>

<style lang="less" scoped>
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
        }
    }
</style>
