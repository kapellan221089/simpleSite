const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const { app, server } = require('./app');
const morgan = require('morgan');

app.use(morgan('dev'));

let config = require('../nuxt.config.js')

async function start() {
  const nuxt = new Nuxt(config) 

  const PORT = process.env.PORT || 5000

  
  const builder = new Builder(nuxt)
  builder.build()


  app.use(nuxt.render)

  server.listen(PORT, () => {
    consola.ready({
      message: `Server listening on ${PORT}`,
      badge: true
    })
  })
}
start()