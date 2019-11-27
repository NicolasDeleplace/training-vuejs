<template>
  <v-container class="mb-12">
      <v-row>
        <v-col>
          <v-alert color="blue" text border="left">
            <p class="mb-0">Le but de cet exercice est la manipulation des stores avec Vuex. Les objectifs sont : </p>
            <p class="mb-0">- Créer l'action dans le store lama.js pour ajouter un lama</p>
            <p class="mb-0 ml-6 font-weight-light font-italic">- axios.post('/lamas', monLama)</p>
            <p class="mb-0">- Créer la mutation dans le store lama.js pour changer l'état du lama</p>
            <p class="mb-0">- Créer la méthode d'ajout de lama dans composant en utilisant le store</p>
            <p class="mb-0">- Lier la méthode d'ajout de lama au bouton de création</p>
            <p class="mb-0">- Attribuer ces règles aux champs du formulaire : </p>
            <p class="mb-0">Tips: la directive <span class="font-weight-bold">"v-on:click"</span> 
            ou <span class="font-weight-bold">"@click"</span> 
            sur un composant permet de lui ajouter un évènement sur le clic.</p>
          </v-alert>
        </v-col>
      </v-row>
    <v-form v-model="valid">
        <v-row>
            <v-col>
                <h1 class="display">Labo à lama</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-select
                        :items="types"
                        label="Type de lama"
                        item-text="name"
                        return-object
                        v-model="selectedType"
                        @change="selectOptions"
                        :rules="rules.type"
                ></v-select>
            </v-col>
            <v-col cols="6">
                <v-text-field
                        outlined
                        placeholder="Nom de votre lama"
                        v-model="lama.name"
                        :rules="rules.name"
                ></v-text-field>
            </v-col>
            <v-col cols="4">
                {{lama.height}}cm
                <v-slider
                        v-model="lama.height"
                        min="0"
                        max="200"
                        prepend-icon="mdi-ruler"
                        :rules="rules.height"
                ></v-slider>
            </v-col>
            <v-col cols="4">
                {{lama.weight}}
                <v-slider
                        v-model="lama.weight"
                        min="0"
                        max="200"
                        prepend-icon="mdi-weight-kilogram"
                        :rules="rules.weight"
                ></v-slider>
            </v-col>
            <v-col cols="4">
                <v-text-field prepend-icon="mdi-cake-variant" type="number" label="Âge" v-model="lama.age"></v-text-field>
            </v-col>
        </v-row>
        <div  v-if="lama.type">
            <lama-color-customizer :lama.sync="lama"></lama-color-customizer>
        </div>
        <v-row justify="end" align="center">
            <v-col cols="12" class="text-center">
                <v-btn :disabled="!valid" color="primary">
                    <v-icon class="mr-2">mdi-egg</v-icon>
                    <span v-if="lama.name">Donner naissance à {{lama.name}}</span>
                    <span v-else>Le lama n'est pas fini ... </span>
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
  </v-container>
</template>

<script>
  import LamaColorCustomizer from "./LamaColorCustomizer";
  import LamaTypes from "../../utils/LamaTypes";

  export default {
    name: "LamaForm",
    components: {LamaColorCustomizer},
    computed:{
      options(){
        return this.types.find(t => t.component === this.lama.type).options
      }
    },
    data: () => ({
      valid: false,
      selectedType: '',
      lama:{
        name: '',
        age: 0,
        height: 0,
        weight: 0,
        type: '',
        options: {},
      },
      types: [],
      rules:{
        type: [
          v => !!v || 'Veuillez choisir un type de lama'
        ],
        name: [
          v => !!v || 'Votre lama doit avoir un nom'
        ],
        weight: [
          v => v > 0 || 'Votre lama est trop leger'
        ],
        height: [
          v => v > 0 || 'Votre lama est trop petit'
        ],
        age: [
          v => v > 0 || 'Veuillez choisir un age à votre lama !'
        ]
      }
    }),
    methods: {
      selectOptions(type) {
        this.lama.type = type.component
        this.lama.options = type.options
      },
      async addLama() {
        //TODO
      }
    },
    created(){
      this.types = LamaTypes
    },
    beforeRouteLeave(to, from, next){
      this.$store.commit('selectLama', null)
      next()
    }
  }
</script>

<style scoped>

</style>
