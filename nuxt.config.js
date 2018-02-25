const resolve = require('path').resolve;

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Lewis1990@Amoy - A Front-end developer passionate about coding and sharing!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "//at.alicdn.com/t/font_569133_q1cjuzoo88qzd7vi.css"} // iconfont
    ]
  },
  css: [
      "~/assets/style/common.css",
      "~/assets/style/markdown.css", // markdown转html样式
      "~/assets/highlight-style/solarized-light.css" // html代码高亮样式
  ],
  /*
  ** Customize the progress bar color
  */
  plugins: [
      { src: "~plugins/client_site/index.js", ssr: false},
      { src: "~plugins/server_site/index.js", ssr: true}
  ],
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  router: {
    extendRoutes (routes) {
      routes.push({
        name: 'post',
        path: '/post/:id/:slug',
        component: resolve(__dirname, 'pages/post/_id.vue')
      })
    }
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
