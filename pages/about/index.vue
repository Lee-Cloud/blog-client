<template lang="html">
    <div class="about-page">
        <p>关于我</p>
        <p>来自厦门，90后，热爱编程、运动、音乐、装逼......</p>
        <p>以下是我的联系方式，我们可以讨论技术，也可以单纯吹吹牛逼。</p>
        <ul>
            <li>QQ: 595199568</li>
            <li>微信: <img :src="require('~/assets/images/WX_QRcode.png')" alt="微信二维码"></li>
        </ul>
    </div>
</template>

<script>
export default {
    layout: "blog"
};
</script>

<style lang="less" scoped>
    .about-page {
        padding: 20px;
        p {
            margin-bottom: 10px;
        }
        ul {
            list-style-position: inside;
            li {
                margin-bottom: 8px;
                display: flex;
                align-items: flex-start;
                img {
                    width: 100px;
                    margin-left: 4px;
                }
            }
        }
    }
</style>
