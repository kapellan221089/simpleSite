const {app,server} = require('./app');
const {Nuxt, Builder}  = require('nuxt');
const config = require('../config/nuxt.config');
const morgan = require('morgan');


const nuxt = new Nuxt(config);
const builder = new Builder(nuxt);


const PORT = process.env.PORT || 8080
app.use(morgan('dev'));

builder.build()
  .then(() => {
  // Рендерить каждый маршрут с Nuxt.js
    app.use(nuxt.render)
    // Запустить сервер
    console.log(PORT);
    server.listen(PORT, ()=>{
       console.log('Server run to port'+PORT);
    });
  });