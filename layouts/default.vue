<template>
  <v-app app>
    <div>
      <a href="https://www.google.ru/">NSR</a>
    <v-navigation-drawer v-model="drawer" app mobile-breakpoint="650">
      <v-list subheader>
        <v-subheader>Menu</v-subheader>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title><div class="font-italic text--disabled text-right">Collapsing Bar</div></v-toolbar-title>
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
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

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
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
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
    drawer: false,
  })
  }
</script>
