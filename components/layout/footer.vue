<template lang="html">
    <footer>
        <p>©2016-2018 lee-cloud.xyz 闽ICP备17026635号-1</p>
    </footer>
</template>

<script>
export default {
    name: "clFooter",
    data () {
        return {};
    }
};
</script>

<style lang="less" scoped>
    @import "~assets/style/varilables.less";
    footer {
        height: @layout-footer-height;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fafafa;
    }
</style>
