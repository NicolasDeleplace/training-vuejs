<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="8" class="mx-auto">
        <v-alert color="blue" text border="left">
            <h1 class="display-1 mb-3">Manipulation du store</h1>
            <p class="subtitle-1">Le but de cet exercice est d'utiliser le store afin de créer un lama et 
              l'ajouter à sa ferme.</p>
            <v-btn color="blue" outlined :to="{name: 'lab'}">Go</v-btn>
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  computed:{
    lamas(){
      return this.$store.getters.lamas
    }
  },
  created(){
    this.fetchLamas()
  },
  methods:{
    async fetchLamas(){
      await this.$store.dispatch('fetchLamas')
      this.loading = false
    }
  }
}
</script>
