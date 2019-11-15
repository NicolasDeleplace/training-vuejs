<template>
  <v-container class="pb-12">
    <v-row>
      <v-col>
        <span class="grey--text font-italic">labo à lama</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-select
          :items="types"
          label="Type de lama"
          item-text="name"
          return-object
          @change="selectOptions"
        ></v-select>
      </v-col>
    </v-row>
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
      <v-col cols="4">
        <v-row v-for="(option, name, index) in options" :key="option+'_'+index" >
          <v-col>
            <v-color-picker
              :value="lama.options[name]"
              hide-canvas
              hide-inputs
              @input="pickColor($event, name)"
              />
          </v-col>
        </v-row>
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
  name: 'lab',
  components: {LamaRegular, LamaGirly, LamaChic, LamaDrug, LamaCute},
  computed:{
    options(){
      return this.types.find(t => t.component === this.lama.type).options
    }
  },
  data: () => ({
    lama:{
      name: '',
      age: 0,
      height:0,
      weight:0,
      type:'lama-drug',
      options: {
        body: '#95C11F',
        ears: '#3AAA35',
        mouth: '#ff7861',
        eyes: '#E94E1B',
        pupil: '#DEDC00'
      },
    },
    types:[
      {
        name: 'Lama Chic',
        component: 'lama-chic',
        options: {
          body: false,
          ears: false,
          mouth: false,
          eyes: false,
          scarf: false
        }
      },
      {
        name: 'Lama Cute',
        component: 'lama-cute'
      },
      {
        name: 'Lama Louche',
        component: 'lama-drug',
        options: {
          body: '#95C11F',
          ears: '#3AAA35',
          mouth: '#ff7861',
          eyes: '#E94E1B',
          pupil: '#DEDC00'
        },
        menu: false
      },
      {
        name: 'Lama Girly',
        component: 'lama-girly',
        options: {
          body: false,
          ears: false,
          tail: false,
          eyes: false,
          head: false,
          legs: false
        }
      },
      {
        name: 'Lama Normal',
        component: 'lama-regular'
      },
    ],
  }),
  methods:{
    selectOptions(type){
      this.lama.type = type.component
      this.lama.options = type.options
    },
    pickColor(color, name){
      this.lama.options[name] = color
    }
  }
}
</script>
