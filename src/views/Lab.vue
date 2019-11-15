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
      <v-col cols="12" >
        <v-btn @click="addLama">Créer le lama</v-btn>
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
            image: 'https://www.numerama.com/content/uploads/2019/05/trou-noir-espace-univers-astronomie.jpg',
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
            image: 'https://www.numerama.com/content/uploads/2019/05/trou-noir-espace-univers-astronomie.jpg',
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
      }
    }
  }
</script>
