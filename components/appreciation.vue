<template lang="html">
    <div class="appreciation-wrap">
        <div id="vcomments"></div>
        <!-- <p>讨论请发邮件到 <a href="mailto:lewis1990@foxmail.com" class="link">lewis1990@foxmail.com</a> </p> -->
        <!-- <p>
            <i class="iconfont" :class="{'icon-like_fill': isLiked || afterLikeIt, 'icon-like': !isLiked}" @click="likeIt"></i>
        </p> -->
        <!-- <p>喜欢的话点个赞咯</p> -->
        <!-- <p>微信扫描赞赏码赞助此文</p> -->
        <!-- <p>或者，请我喝杯咖啡？</p>
        <img :src="require('~/assets/images/appreciation.jpg')" alt=""> -->
    </div>
</template>

<script>
import clLine from "~/components/line.vue";
// import Valine from "valine";
// window.AV = require("leancloud-storage");
let Valine = null;
if (process.browser) {
    Valine = require("valine");
    window.AV = require("leancloud-storage");
}
export default {
    props: ["postId", "like_ids"],
    data() {
        return {
            liked: false,
            afterLikeIt: false
        };
    },
    computed: {
        isLiked: function () {
            if (!this.$store.state.isLogined) {
                return false;
            } else {
                if (this.like_ids.indexOf(this.$store.state.userInfo.id || "") !== -1) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    },
    mounted () {
        this.valine = new Valine({
            el: "#vcomments",
            appId: "04lb0SPiJFWu4TjqCx86slgB-gzGzoHsz",
            appKey: "GUjRjPdRrETsyP7LN8ly91ss",
            path: this.postId,
            placeholder: "写下你的评论..."
            // avatar: ""
            // notify: true
            // verify: true
        });
    },
    methods: {
        likeIt: function () {
            if (this.$store.state.isLogined) {
                if (!this.isLiked) {
                    this.likePost();
                }
            } else {
                const login = window.confirm("该操作需要登录权限，是否登录？");
                if (login) {
                    this.$store.dispatch("redirect");
                }
            }
        },
        likePost: function () {
            let paramLike = "";
            if (this.like_ids) {
                paramLike = this.like_ids + ",";
            }
            this.$http.put(this.$api.POST_LIKE, {
                id: this.postId,
                like_ids: paramLike + this.$store.state.userInfo.id
            }).then(res => {
                if (res.success) {
                    this.afterLikeIt = true;
                    console.log("点赞成功");
                }
            }).catch(err => {
                console.log("点赞失败", err);
            });
        }
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
    .link {
        color: #555;
        text-decoration: underline;
    }
    .appreciation-wrap {
        width: 100%;
        margin-top: 60px;
        padding: 40px 0;
        // text-align: center;
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
