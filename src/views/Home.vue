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
        <v-alert color="blue" border="left" text>
          <h1 class="display">Exercice : Verification formulaire</h1>
          <p>Cet exercice à pour but d'effectuer une validation sur les champs d'un formulaire !</p>
          <v-btn outlined color="blue" :to="{name: 'lab'}">Go</v-btn>
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
