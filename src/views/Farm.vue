<template>
  <v-container class="pb-12">
    <v-row>
      <v-col>
        <span class="display-2">Vos lamas</span>
      </v-col>
    </v-row>
    <v-row v-if="loading">
      <v-col>
        <v-progress-linear indeterminate></v-progress-linear>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col v-if="lamas.length === 0">
        <span class="font-italic grey--text">Vous n'avez pas encore de lama dans votre ferme :(</span>
      </v-col>
      <v-col v-else cols="4" v-for="(lama, index) in lamas" :key="`lama_${index}`">
        <v-card>
          <v-container class="mt-0 pt-0">
            <v-row>
              <v-col class="text-center indigo darken-2 white--text">
                <span class="title">{{lama.name}}</span>
              </v-col>
            </v-row>
          </v-container>
          <component :is="lama.type" :options="lama.options"></component>
          <v-divider></v-divider>
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>
                    mdi-weight-kilogram
                  </v-icon>
                </v-list-item-icon>
                <span class="subtitle-1">{{lama.weight}} kg</span>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>
                    mdi-ruler
                  </v-icon>
                </v-list-item-icon>
                <span class="subtitle-1">{{lama.height}} cm</span>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>
                    mdi-cake-variant
                  </v-icon>
                </v-list-item-icon>
                <span class="subtitle-1">{{lama.age}} ans</span>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LamaCute from "../components/Lama/LamaCute";
import LamaDrug from "../components/Lama/LamaDrug";
import LamaChic from "../components/Lama/LamaChic";
import LamaGirly from "../components/Lama/LamaGirly";
import LamaRegular from "../components/Lama/LamaRegular";

export default {
  name: 'farm',
  components: {LamaRegular, LamaGirly, LamaChic, LamaDrug, LamaCute},
  computed:{
    lamas(){
      return this.$store.getters.lamas
    }
  },
  data: () => ({
    loading: true
  }),
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
