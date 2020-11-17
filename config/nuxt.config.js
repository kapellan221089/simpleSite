module.exports = { 
    buildModules: [
        '@nuxtjs/vuetify',
      ],
      plugins: [{ src: '@/plugins/socket', ssr: false }],
      head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    },
}