<template>
  <v-container>
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
        <v-btn :disabled="!valid" @click="updateLama" v-if="lama.id" color="primary"><v-icon class="mr-2">mdi-knife</v-icon> Lancer l'operation chirugicale de {{lama.name}}</v-btn>
        <v-btn :disabled="!valid" @click="addLama" v-else color="primary">
          <v-icon class="mr-2">mdi-egg</v-icon>
          <span v-if="lama.name">Donner naissance à {{lama.name}}</span>
          <span v-else>Le lama est pas fini ... </span>
        </v-btn>
      </v-col>
    </v-row>
    </v-form>
  </v-container>
</template>

<script>
  import LamaTypes from "../utils/LamaTypes";
  import LamaColorCustomizer from "../components/Lab/LamaColorCustomizer";

  export default {
    name: 'lab',
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
        ]
      }
    }),
    methods: {
      selectOptions(type) {
        this.lama.type = type.component
        this.lama.options = type.options
      },
      async addLama() {
        await this.$store.dispatch('addLama', this.lama);
        this.$router.push({name:'farm'})
      },
      async updateLama(){
        await this.$store.dispatch('updateLama', this.lama)
        this.$router.push({name:'farm'})
      }
    },
    created(){
      this.types = LamaTypes
      const lama = this.$store.getters.lama
      if(lama){
        this.selectedType = this.types.find(t => t.component === lama.type)
        this.lama = lama
      }
    },
    beforeRouteLeave(to, from, next){
      this.$store.commit('selectLama', null)
      next()
    }
  }
</script>
