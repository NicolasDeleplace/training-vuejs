<template>
  <v-container>
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
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-text-field outlined placeholder="Nom de votre lama" v-model="lama.name"></v-text-field>
      </v-col>
      <v-col cols="4">
        {{lama.height}}cm
        <v-slider
                v-model="lama.height"
                min="0"
                max="200"
                prepend-icon="mdi-ruler"
        ></v-slider>
      </v-col>
      <v-col cols="4">
        {{lama.weight}}
        <v-slider
                v-model="lama.weight"
                min="0"
                max="200"
                prepend-icon="mdi-weight-kilogram"
        ></v-slider>
      </v-col>
      <v-col cols="4">
        <v-text-field prepend-icon="mdi-cake-variant" type="number" label="Âge" v-model="lama.age"></v-text-field>
      </v-col>
    </v-row>
    <div  v-if="lama.type">
      <v-row>
        <v-col cols="8">
          <v-card class="mx-auto fill-height">
            <v-row>
              <v-col class="text-center" >
                <keep-alive>
                  <component :is="lama.type" :options="lama.options"></component>
                </keep-alive>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="4" v-if="lama.type === 'lama-cute' || lama.type === 'lama-unicorn'">
          <lama-cute-options :options.sync="lama.options"></lama-cute-options>
        </v-col>
        <v-col cols="4" v-else>
          <v-row v-for="(option, i) in lama.options" :key="option+'_'+i" >
            <v-col>
              <v-color-picker v-model="option.color" hide-canvas hide-inputs></v-color-picker>
            </v-col>
          </v-row>
        </v-col>
    <v-row v-if="lama.type" justify="end" align="center">
      <v-col cols="12" class="text-center">
        <v-btn @click="updateLama" v-if="lama.id" color="primary"><v-icon class="mr-2">mdi-knife</v-icon> Lancer l'operation chirugicale de {{lama.name}}</v-btn>
        <v-btn @click="addLama" v-else color="primary"><v-icon class="mr-2">mdi-egg</v-icon> Donner naissance à {{lama.name !== '' ? lama.name : ' ce lama sans nom'}}</v-btn>
      </v-col>
    </v-row>
      </v-row>
    </div>
  </v-container>
</template>

<script>
  import LamaCute from "../components/Lama/LamaCute";
  import LamaDrug from "../components/Lama/LamaDrug";
  import LamaChic from "../components/Lama/LamaChic";
  import LamaGirly from "../components/Lama/LamaGirly";
  import LamaRegular from "../components/Lama/LamaRegular";
  import LamaCuteOptions from "../components/Lama/LamaCuteOptions";
  import LamaUnicorn from "../components/Lama/LamaUnicorn";

  export default {
    name: 'lab',
    components: {LamaCuteOptions, LamaRegular, LamaGirly, LamaChic, LamaDrug, LamaCute, LamaUnicorn},
    computed:{
      options(){
        return this.types.find(t => t.component === this.lama.type).options
      }
    },
    data: () => ({
      selectedType: '',
      lama:{
        name: '',
        age: 0,
        height: 0,
        weight: 0,
        type: '',
        options: {},
      },
      types: [
        {
          name: 'Lama Chic',
          component: 'lama-chic',
          options: [
            {
              name: 'body',
              color: '#95C11F',
            },
            {
              name: 'ears',
              color: '#3AAA35',
            },
            {
              name: 'mouth',
              color: '#ff7861',
            },
            {
              name: 'eyes',
              color: '#E94E1B',
            },
            {
              name: 'scarf',
              color: '#E94E1B',
            },
          ]
        },
        {
          name: 'Lama Cute',
          component: 'lama-cute',
          options:{
            mode:'color',
            image: 'https://i.ytimg.com/vi/tsjd7xdgfjA/maxresdefault.jpg',
            color: '52e449',
            gradient: {
              direction: 'top',
              colors:[
                 '#E45434',
                 '#52E449'
              ]
            }
          }
        },
        {
          name: 'Lama Unicorn',
          component: 'lama-unicorn',
          options:{
            mode:'color',
            image: 'https://i.ytimg.com/vi/tsjd7xdgfjA/maxresdefault.jpg',
            color: '52e449',
            gradient: {
              direction: 'top',
              colors:[
                '#E45434',
                '#52E449'
              ]
            }
          }
        },
        {
          name: 'Lama Louche',
          component: 'lama-drug',
          options: [
            {
              name: 'body',
              color: '#95C11F',
            },
            {
              name: 'ears',
              color: '#3AAA35',
            },
            {
              name: 'mouth',
              color: '#ff7861',
            },
            {
              name: 'eyes',
              color: '#E94E1B',
            },
            {
              name: 'pupil',
              color: '#DEDC00',
            }
          ],
          menu: false
        },
        {
          name: 'Lama Girly',
          component: 'lama-girly',
          options: [
            {
              name: 'body',
              color: '#95C11F',
            },
            {
              name: 'ears',
              color: '#3AAA35',
            },
            {
              name: 'tail',
              color: '#ff7861',
            },
            {
              name: 'eyes',
              color: '#4cb2e9',
            },
            {
              name: 'head',
              color: '#42e964',
            },
            {
              name: 'legs',
              color: '#95C11F',
            },
          ]
        },
        {
          name: 'Lama Normal',
          component: 'lama-regular'
        },
      ],
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
