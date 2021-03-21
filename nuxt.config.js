export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/Alt-Company/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'alt-company',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  generate: {
    exclude: [
      /^\/dynamic-route\//,
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',
  ],

  tailwindcss: {
    jit: true,
    cssPath: '~/assets/css/main.css',
    exposeConfig: true,
  },

  colorMode: {
    classSuffix: '',
  },

  i18n: {
    locales: [
      {
        code: 'esp',
        iso: 'en-ES',
        name: 'Español',
      },
      {
        code: 'eng',
        iso: 'en-US',
        name: 'English',
      },
      {
        code: 'fra',
        iso: 'fr-fr',
        name: 'Français',
      },
    ],
    defaultLocale: 'eng',
    noPrefixDefaultLocale: false,
    vueI18n: {
      fallbackLocale: 'eng',
      messages: {
        eng: require('./locales/en-us.json'),
        esp: require('./locales/es-es.json'),
        fra: require('./locales/fr-fr.json'),
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}