import config from "./index.js";
export default {
    BLOG_INFO: config.api + "/blog_info",
    POST: config.api + "/post",
    POST_LIKE: config.api + "/post_like",
    GUEST: config.api + "/guest",
    WEIBO_LOGIN: config.api + "/weibo_login",
    WEIBO_TOKEN: config.api + "/weibo_token",
    QQ_LOGIN: config.api + "/qq_login",
    QQ_TOKEN: config.api + "/qq_token",

    // 页面请求
    HOME_PAGE: config.api + "/home_page"
};
