const app = require('express')();
const {Nuxt, Builder}  = require('nuxt');
const config = require('../nuxt.config.js');

const nuxt = new Nuxt(config);
const builder = new Builder(nuxt);

const PORT = process.env.PORT || 8000
builder.build()
  .then(() => {
  // Рендерить каждый маршрут с Nuxt.js
    app.use(nuxt.render)
    // Запустить сервер
    app.listen(process.env.PORT, '0.0.0.0', ()=>{
       console.log('Server run in 8000 port'); 
    });
  });