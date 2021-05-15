const axios = require("axios");
export default {
  install: function(Vue, options) {
    Vue.prototype.$readPageConfig = function() {
      const text = document.getElementById("pageConfig").configDom.text || "";
      let oConfig;
      try {
        oConfig = JSON.parse(text) || {};
      } catch (e) {
        oConfig = {};
      }
      return oConfig;
    };
    Vue.prototype.$http = (function() {
      return axios;
    })();
  }
};
