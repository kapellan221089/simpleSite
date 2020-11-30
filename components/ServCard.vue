<template>
<v-container fluid>
  <v-card
    color = "yellow darken-2"
    v-for="serv in service" :key="serv.title"
    class="mx-auto card black--text"
    max-width="1000"
  >
    <v-img
      :src="serv.src"
      height="1000px"
    ></v-img>

    <v-card-title v-text="serv.title">
      
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text v-text="serv.text">
          
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</v-container>
</template>

<script>
export default {
    data: () => ({
      show: false,
      service:[
        {
          title: 'Проектная документация.', 
          src: 'https://payload.cargocollective.com/1/0/6670/61995/obmerniy%20plan.jpg',
          text: 'Составление проектной документации и исполнительных чертежей'
        },
              {
          title: 'Интерьер', 
          src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          text: 'Подбор и размещение деталей внутренней отделки помещений'
        },
              {
          title: 'Дизайн интерьера', 
          src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          text: 'Выбор цветовой гаммы внутренней отделки'
        },
      ],
    }),
    
}
</script>

<style>
 .card {
  margin-top: 50px;
 }
</style>