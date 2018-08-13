<template lang="html">
    <div class="wrapper">
        <!-- <img src="../assets/images/avatar.png" alt=""> -->
        <img :src="$store.state.userInfo.avatar || require('~/assets/images/avatar-default.png')" alt="头像" class="avatar" v-on:click="changeAvatar">
        <div class="new-comment-main" @click="checkLoginState">
            <textarea v-model="comment.content" rows="3" maxlength="30" placeholder="leave me a message"></textarea>
            <span class="btn" v-on:click="comfirm">留言</span>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            comment: {
                content: "",
                avatar: Math.ceil(Math.random() * 21)
            }
        };
    },
    methods: {
        changeAvatar: function () {
            this.comment.avatar = Math.ceil(Math.random() * 21);
        },
        comfirm: function() {
            this.$emit("comfirm", this.comment);
        },
        checkLoginState: function () {
            if (!this.$store.state.isLogined) {
                this.$store.commit("changeLoginBoxVisible", true);
            } else {
                alert("留言功能暂未开放。");
            }
        }
    }
};
</script>

<style lang="less" scoped>
.wrapper {
    display: flex;
    margin: 20px 0;
    padding: 0 20px;
    > img.avatar {
        width: 40px;
        height: 40px;
        margin-right: 20px;
        border-radius: 50%;
        cursor: pointer;
    }
    > div.new-comment-main {
        flex: 1;
        text-align: right;
        > textarea {
            width: 100%;
            margin-bottom: 10px;
            padding: 8px;
            background: transparent;
            outline: none;
            font-size: 14px;
            border-radius: 4px;
            resize: none;
            border: 1px solid #ccc;
            &::-webkit-input-placeholder {
                color: #ddd;
                // color: @black-disabled;
            }
        }
        > span.btn {
            flex: 1;
            margin-right: 6px;
            padding: 4px 8px;
            border: 1px solid #555;
            border-radius: 4px;
            cursor: pointer;
        }
    }
}
</style>
