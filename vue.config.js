const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/": {
        'target': "http://openapi.11st.co.kr/",
        'pathRewrite': { "^/": "" },
        'changeOrigin': true,
        'secure': false,
        'ws': false,
      },
    },
  },
});
