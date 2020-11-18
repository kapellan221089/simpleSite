const app = require('express')();
const {Nuxt, Builder}  = require('nuxt');
const config = require('../nuxt.config.js');


const PORT = process.env.PORT || 80

builder.build()
  .then(() => {
  // Рендерить каждый маршрут с Nuxt.js
    app.use(nuxt.render)
    // Запустить сервер
    app.listen(PORT, ()=>{
       console.log('Server run in 8000 port'); 
    });
  });