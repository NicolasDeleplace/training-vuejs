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
    <v-row>
      <v-col cols="8" class="mx-auto">
       <v-alert text color="blue" border="left">
         <h1 class="display-1">Exercice 2 : Two way binding</h1>
         <p>Le but de cet exercice est de réaliser un "binding bidirectionnel" dans un composant Vuejs</p>
         <v-row>
           <v-col class="text-center">
            <v-btn :to="{name: 'lab'}" outlined color="blue">Go</v-btn>
           </v-col>
         </v-row>
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
