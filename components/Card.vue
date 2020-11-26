<template>
  <v-card
    class="mx-auto"
    
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
          :height ="card.height"
        >
          <v-card @click.stop="">
            <v-img
              :src="card.src"
              class="white--text align-center"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="500px"
              
            >
              <v-card-title v-text="card.title" class = 'd-flex justify-center'></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
    data: () => ({
      cards: [
        { title: 'Оказание дизайнерских услуг и услуг по проектированию интерьера', src: 'https://homebuilding.ru/wp-content/uploads/2018/04/luchshie-dizaynery-intererov-mira-1.jpg', flex: 12},
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6},
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
    }),
}
</script>

<style>

</style>