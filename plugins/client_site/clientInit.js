// 初始化客户端数据
import store from "~/store";
let weiboToken = {};
let userInfo = {};
try {
    weiboToken = JSON.parse(localStorage.weiboToken);
    userInfo = JSON.parse(localStorage.userInfo);
} catch (e) {
    console.log("用户未登录");
}
