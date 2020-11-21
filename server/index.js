const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const { app, server } = require('./app')

let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  const nuxt = new Nuxt(config)


  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
 const PORT = process.env.PORT
  app.use(nuxt.render)

  server.listen(PORT, () => {
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    })
  })
}
start()
