const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const { app, server } = require('./app')

let config = require('../nuxt.config.js')


async function start() {
  const nuxt = new Nuxt(config)

 const PORT = process.env.PORT

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(nuxt.render)

  server.listen(PORT, () => {
    consola.ready({
      message: `Server listening on ${PORT}`,
      badge: true
    })
  })
}
start()
