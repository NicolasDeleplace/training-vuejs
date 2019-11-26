<template>
  <v-container class="mb-12">
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
      <v-col v-else cols="12"  md="6" lg="4" v-for="(lama, index) in lamas" :key="`lama_${index}`">
        <v-card>
          <v-container class="mt-0 pt-0">
            <v-row class="indigo darken-2 ">
              <v-col cols="2">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn icon color="indigo darken-4" v-on="on" @click="edit(lama)"><v-icon>mdi-flask</v-icon></v-btn>
                  </template>
                  <span>Apporter des modifications génétique à {{lama.name}}</span>
                </v-tooltip>
              </v-col>
              <v-col cols="8" class="text-center white--text">
                <span class="title">{{lama.name}}</span>
              </v-col>
              <v-col cols="2" class="text-right">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn icon color="indigo darken-4" v-on="on" @click="kill(lama)"><v-icon>mdi-skull</v-icon></v-btn>
                  </template>
                  <span>Empoisoner {{lama.name}}</span>
                </v-tooltip>
              </v-col>
            </v-row>
          </v-container>
          <v-row>
            <v-col class="text-center">
              <component class="mx-auto" :is="lama.type" :options="lama.options"></component>
            </v-col>
          </v-row>
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
import LamaUnicorn from "../components/Lama/LamaUnicorn";
import {EventBus} from "../eventBus";

export default {
  name: 'farm',
  components: {LamaRegular, LamaGirly, LamaChic, LamaDrug, LamaCute, LamaUnicorn},
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
    },
    async kill(lama){
      await this.$store.dispatch('removeLama', lama)
      EventBus.$emit('show-snack', {
        message: lama.name + ' est mort dans d\'attroces souffrances par votre faute...',
        type: 'info'
      })
    },
    edit(lama){
      this.$store.commit('selectLama', lama)
      this.$router.push({name: 'lab'})
    }
  }
}
</script>
