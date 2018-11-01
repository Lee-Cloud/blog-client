/* eslint-disable */
(function() {
  var tag1 = document.createElement("script");
  var tag2 = document.createElement("script");
  tag1.src = "//cdn1.lncld.net/static/js/3.0.4/av-min.js";
  tag2.src = "//unpkg.com/valine/dist/Valine.min.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(tag1, s);
  s.parentNode.insertBefore(tag2, s);
})();
