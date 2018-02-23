/* eslint-disable */
import store from "~/store";
import Fingerprint2 from "fingerprintjs2";
let fp = localStorage.fp || "";
if (!fp) {
    new Fingerprint2().get(function(result, components) {
      fp = result // a hash, representing your device fingerprint
      localStorage.setItem("fp", fp);
      // console.log(components) // an array of FP components
    });
}

// console.log("te:", store().state);

store().commit("identify_guest", {
    fp: fp
});
