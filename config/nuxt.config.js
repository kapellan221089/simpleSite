module.exports = { 
    Modules: [
        // Simple usage
        '@nuxtjs/vuetify',
    
        // With options
        ['@nuxtjs/vuetify', { /* module options */ }]
    ],
    plugins: [{ src: '@/plugins/socket', ssr: false }],
    head: {
      meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    },
}