<template lang="html">
    <header>
        <img :src="require('~/assets/images/avatar.jpg')" alt="avatar" class="avatar">
        <p class="name">Lewis1990@Amoy</p>
        <p class="description">A Front-end developer passionate about coding and sharing!</p>
        <ul class="navigations">
            <nuxt-link to="/" tag="li">
                <i class="iconfont icon-homepage" title="回到首页"></i>
            </nuxt-link>
            <nuxt-link to="/post" tag="li">
                <i class="iconfont icon-activity" title="全部文章"></i>
            </nuxt-link>
            <!-- <nuxt-link to="/about" tag="li">
                <i class="iconfont icon-people" title="关于我"></i>
            </nuxt-link> -->
            <!-- <li>
                <i class="iconfont icon-login" title="登录解锁更多姿势与我深入交流吧" @click="$store.commit('changeLoginBoxVisible', true)"></i>
            </li> -->
        </ul>

        <!-- 登录弹窗 -->
        <transition name="fade">
            <div class="mask" v-show="$store.state.loginBoxVisible" @click.self="$store.commit('changeLoginBoxVisible', false)">
                <div class="loginBox">
                    <p>登录解锁更多姿势与我深入交流吧</p>
                    <ul class="loginWay">
                        <li class="iconfont icon-sina" style="color: rgb(225, 39, 39); fontSize: 20px;" @click="$store.dispatch('weiboLogin')"></li>
                        <li class="iconfont icon-qq" style="color: rgb(76, 175, 233); fontSize: 20px;" @click="$store.dispatch('qqLogin')"></li>
                    </ul>
                </div>
            </div>
        </transition>

        <!-- 登录用户名 -->
        <!-- <span class="loginName" v-if="$store.state.userInfo.name">
            <img :src="$store.state.userInfo.avatar" alt="头像">
            <i  class="iconfont icon-sina" style="color: rgb(225, 39, 39)"></i>
            <span>{{$store.state.userInfo.name}}</span>
        </span>

        <span class="loginName" v-else @click="$store.commit('changeLoginBoxVisible', true)" style="cursor: pointer;">登录</span> -->

    </header>
</template>

<script>
export default {
    name: "clHeader",
    data () {
        return {};
    },
    methods: {}
};
</script>

<style lang="less" scoped>
    @import "~assets/style/varilables.less";
    header {
        position: relative;
        width: 100%;
        // max-width: 640px;
        // margin: 0 auto;
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

    .mask {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        .loginBox {
            position: absolute;
            top: 50%;
            left: 50%;
            padding: 30px 20px;
            transform: translate(-50%, -50%);
            // display: flex;
            width: 400px;
            // height: 200px;
            border-radius: 8px;
            background-color: white;
            max-width: 90%;

            ul.loginWay {
                display: inline-flex;
                list-style: none;
                margin-top: 20px;
                > li {
                    font-size: 30px;
                    cursor: pointer;
                    margin: 0 10px;
                }
            }
        }
    }

    .loginName {
        position: absolute;
        right: 20px;
        top: 10px;
        display: inline-flex;
        align-items: center;

        > img {
            border-radius: 50%;
            width: 20px;
            margin-right: 6px;
        }
        // cursor: pointer;
        // text-decoration: underline;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

</style>
