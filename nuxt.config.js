const DESCRIPTION = 'Webサイト制作・Webアプリケーション開発についてお受けいたします。' +
  '10年以上のエンジニア経験から、幅広い要望に対応可能です。' +
  '気軽にお問い合わせください。'
const SITE_NAME = "Kaede Ashizaki's Portfolio"
const SITE_OGP_IMAGE = '/img/ogp.png'

import axios from 'axios'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: SITE_NAME,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: DESCRIPTION },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:site_name', property: 'og:site_name', content: SITE_NAME },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: process.env.BASE_URL || 'https://localhost:3000' },
      { hid: 'og:title', property: 'og:title', content: SITE_NAME },
      { hid: 'og:description', property: 'og:description', content: DESCRIPTION },
      { hid: 'og:image', property: 'og:image', content: process.env.BASE_URL + '/' + SITE_OGP_IMAGE },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:title', name: 'twitter:title', content: SITE_NAME },
      { hid: 'twitter:description', name: 'twitter:description', content: DESCRIPTION },
      { hid: 'twitter:image', name: 'twitter:image', content: process.env.BASE_URL + SITE_OGP_IMAGE },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  generate: {
    subFolders: true,
    async routes(callback) {
      await axios.get(process.env.STRAPI_URL + '/api/works?populate=*')
        .then(res => {
          const contents = res.data.data
          const routeList = contents.map((content) => ({
            route: `/works/${ content.id }`,
            payload: content
          }))
          callback(null, routeList)
        })
        .catch(callback)
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/init',
    '~/plugins/vuelidate'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/strapi',
    '@nuxtjs/markdownit'
  ],

  markdownit: {
    injected: true // $md.render()がグローバルで使えるようになる
  },

  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
  },

  publicRuntimeConfig: {
    contactUrl: process.env.CONTACT_URL || 'https://script.google.com/macros/s/AKfycbyAAMRo2m7tyZzvJyhXEtiOjVbtUiT5lKlQNeVlhTeQb_UCQKw/exec',
    baseUrl: process.env.BASE_URL || 'https://localhost:3000',
    siteName: SITE_NAME
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
  }
}
