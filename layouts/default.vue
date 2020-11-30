<template>
  <v-app app>
    <div>
    <v-navigation-drawer v-model="drawer" app mobile-breakpoint="650">
      <v-list subheader>
        <v-subheader class="title justify-center"><h4>Навигационное меню</h4></v-subheader>
        <v-list-item  v-for="item in menus" :key="item.title" @click = "setCurrentMenu(item)" link :to="{name:item.link}" exact>
          <v-list-item-content>
            <v-list-item-title>{{item.title}} </v-list-item-title>
          </v-list-item-content>

          <v-list-item-content >
            <v-icon :color="item === currentMenu? 'primary' : 'grey'">{{item.icon}}</v-icon>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-italic">Название вашей чудесной и распрекрасной конторки:)</v-toolbar-title>
    </v-app-bar>
    <v-main app>
      <div style="heigth:100%">
        <nuxt/>
      </div>
    </v-main>
    </div>
    <div>
    <v-footer
    app
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal title justify-center">
        <strong class="subheading">Свяжитесь с нами в социальных сетях!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Schlosser</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </div>
  </v-app>
</template>


<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      menus: [
        {
          title:'Главная',
          icon:'mdi-home',
          link:'index'
        },
        {
          title:'Услуги',
          icon:'mdi-palette-advanced',
          link:'service'
        },
        {
          title:'Контакты',
          icon: 'mdi-human-greeting-proximity',
          link:'contact'
        }
      ],
      drawer: false,
      currentMenu : 'Главная'
    }),
    methods:{
      setCurrentMenu(item){
        this.currentMenu = item
        console.log(this.currentMenu)
    }
    }
  }
</script>
