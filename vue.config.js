const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  publicPath: '/shopingmall/',
  outputDir: 'dist' ,
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/api": {
        'target': "http://openapi.11st.co.kr/",
        'pathRewrite': { "^/api": "/" },
        'changeOrigin': true,
        'secure': false,
        'ws': false,
      },
    },
  },
});