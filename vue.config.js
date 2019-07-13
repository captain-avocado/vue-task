module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/sass/mixins.scss";
          @import "@/assets/sass/variables.scss";
        `
      }
    }
  },
  publicPath: 'vue-task/dist'
};
