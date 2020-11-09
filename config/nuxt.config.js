module.exports = {
    buildModules: [
        '@nuxtjs/vuetify',
      ],
      plugins: [{ src: '@/plugins/socket', ssr: false }],
}