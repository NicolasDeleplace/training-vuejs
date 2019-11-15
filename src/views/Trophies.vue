<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="display">Trophés</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span v-for="(trophy, index) in trophies" :key="`trophy_${index}`" :class="{'grey--text': !trophy.unlocked}">{{trophy.name}}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'trophies',
    computed:{
      trophies(){
        return this.$store.getters.trophies
      }
    },
    data: () => ({
    }),
    methods: {
    },
    created(){
      if(this.trophies.length === 0){
        this.$store.dispatch('fetchTrophies')
      }
    },
  }
</script>
