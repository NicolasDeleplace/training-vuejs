<template>
  <v-app>
    <v-app-bar app fixed clipped-left>
        <v-img
          :src="require('./assets/logo.png')"
          class="my-3"
          contain
          height="60"
          max-width="60"
        ></v-img>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">LAMA</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn href="https://github.com/NicolasDeleplace/training-vuejs" target="_blank" text>
        view on github
        <v-icon class="ml-2">mdi-github-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
      <v-footer
              style="bottom:-61px"
              absolute
              class="font-weight-medium"
      >
        <v-col
                class="text-center"
                cols="12"
        >
          <span>
            Made with <v-icon>mdi-heart</v-icon> & <v-icon>mdi-pizza</v-icon> by Nico & Nico
          </span>
        </v-col>
      </v-footer>
    </v-content>

    <v-navigation-drawer clipped app permanent>
      <v-list dense rounded>
        <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-snackbar v-model="snackbar" :color="snack.color" top>
      {{ snack.text }}
    </v-snackbar>
  </v-app>
</template>

<script>
import { EventBus } from './eventBus'

export default {
  name: 'App',
  data: () => ({
    items: [
      {
        icon: 'mdi-home-outline',
        title: 'Accueil',
        link: { name: 'home' }
      },
      {
        icon: 'mdi-flask-empty-outline',
        title: 'Labo',
        link: { name: 'lab' }
      },
      {
        icon: 'mdi-silo',
        title: 'Ferme à Lama',
        link: { name: 'farm' }
      }
    ],
    snackbar: false,
    snack: {
      color: 'primary',
      text: ''
    }
  }),
  created() {
    EventBus.$on('show-snack', data => {
      this.snack.text = data.message
      this.snack.color = data.type
      this.snackbar = true
    })
  }
};
</script>
