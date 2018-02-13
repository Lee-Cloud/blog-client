<template lang="html">
    <header>
        <img :src="require('~/assets/images/avatar.jpg')" alt="avatar" class="avatar">
        <p class="name">Lewis1990@Amoy</p>
        <p class="description">A Front-end developer passionate about coding and sharing!</p>
        <ul class="navigations">
            <nuxt-link to="/" tag="li">
                <i class="iconfont icon-homepage"></i>
            </nuxt-link>
            <!-- <nuxt-link to="/post" tag="li">
                <i class="iconfont icon-activity"></i>
            </nuxt-link>
            <nuxt-link to="/about" tag="li">
                <i class="iconfont icon-people"></i>
            </nuxt-link> -->
        </ul>
    </header>
</template>

<script>
export default {
    name: "clHeader"
};
</script>

<style lang="less" scoped>
    @import "~assets/style/varilables.less";
    header {
        width: 100%;
        height: @layout-header-height;
        padding: 40px 0 20px 0;
        display: flex;
        flex-direction: column;
        // justify-content: flex-start;
        justify-content: center;
        text-align: center;
        .avatar {
            margin: 0 auto;
            width: 128px;
            height: 128px;
            border-radius: 50%;
            opacity: 0.6;
        }
        .name {
            margin: 20px 0;
            font-weight: bold;
        }
        .description {
            padding: 0 20px;
            color: #65737E;
        }
        .navigations {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            list-style: none;
            > li {
                margin: 10px 20px;
                cursor: pointer;
                transition: all .3s;
                &:hover {
                    transform: scale(1.5);
                }
                 .iconfont {
                    font-size: 24px;
                }
            }
        }
    }
</style>
