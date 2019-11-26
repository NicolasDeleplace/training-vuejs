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
    <v-row class="">
      <v-col cols="8" class="mx-auto">
          <v-alert color="blue" text border="left">
            <h1 class="display-1 mb-3">Hello !</h1>
            <span class="subtitle-1">
              Votre première mission va être de créer le labo de lama ! <br/>
              Pour ce fair vous devez : <br/>
              - Créer un component Vue dans le dossier "views" <br/>
              - Ajouter une route et importer votre nouvelle vue dans le fichier "router/index.js" <br/>
              - Importer notre composant <code>lama-form</code> (que nous avons déjà créé aavec amour)<br/>
            </span>
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
