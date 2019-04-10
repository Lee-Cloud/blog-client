import Vue from "vue";
import hljs from "highlight.js";
import "./baidu_tongji.js";
import "./google_a.js";
// import "./clientInit.js";
// import "./valine.js";

const install = function (VueClass, opts = {}) {};
Vue.use(install);

Vue.directive("highlight", (el) => {
    const blocks = el.querySelectorAll("pre code");
    blocks.forEach((block) => {
        hljs.highlightBlock(block);
    });
});

import fastclick from "fastclick";
fastclick.attach(document.body);

let adsbygoogle;
(adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-1218928568415905",
    enable_page_level_ads: true
});
