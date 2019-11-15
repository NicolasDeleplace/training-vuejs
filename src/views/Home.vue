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
        <v-card outlined>
          <v-card-text>
            <h1 class="display-1 mb-3">Hello !</h1>
            <span class="subtitle-1">Bienvenue dans votre élevage de lama. Vous pouvez dès à présent donner la vie à de nouveaux lamas ou allez rendre visite
              à vos magnifique lamas.</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" offset="2">
        <v-card color="indigo">
          <v-card-text class="text-center">
            <h1 class="display-4">
              <v-icon size="70">mdi-flask-empty-outline</v-icon>
            </h1>
          </v-card-text>
          <v-card-actions>
            <v-btn text dark :to="{name: 'lab'}" class="mx-auto">
              <v-icon class="mr-2">mdi-flask-empty-outline</v-icon>
              Aller au labo
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card color="indigo">
          <v-card-text class="text-center">
            <h1 class="display-4">
              {{lamas.length}}
            </h1>
          </v-card-text>
          <v-card-actions>
            <v-btn text dark :to="{name: 'farm'}" class="mx-auto">
              <v-icon class="mr-2">mdi-silo</v-icon>
              Aller à la ferme
            </v-btn>
          </v-card-actions>
        </v-card>
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
