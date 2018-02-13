import Vue from "vue";
import hljs from "highlight.js";
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
