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
        <v-col cols="4" v-if="lama.type === 'lama-cute'">
          cute
        </v-col>
        <v-col cols="4" v-else>
          <v-row v-for="(option, i) in lama.options" :key="option+'_'+i" >
            <v-col>
              <v-color-picker v-model="option.color" hide-canvas hide-inputs></v-color-picker>
            </v-col>
          </v-row>
        </v-col>
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
        type:'',
        options: {},
      },
      types:[
        {
          name: 'Lama Chic',
          component: 'lama-chic',
          options: [
            {
              name: 'body',
              color : '#95C11F',
            },
            {
              name: 'ears',
              color : '#3AAA35',
            },
            {
              name: 'mouth',
              color : '#ff7861',
            },
            {
              name: 'eyes',
              color : '#E94E1B',
            },
            {
              name: 'scarf',
              color : '#E94E1B',
            },
          ]
        },
        {
          name: 'Lama Cute',
          component: 'lama-cute'
        },
        {
          name: 'Lama Louche',
          component: 'lama-drug',
          options: [
            {
              name: 'body',
              color : '#95C11F',
            },
            {
              name: 'ears',
              color : '#3AAA35',
            },
            {
              name: 'mouth',
              color : '#ff7861',
            },
            {
              name: 'eyes',
              color : '#E94E1B',
            },
            {
              name: 'pupil',
              color : '#DEDC00',
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
              color : '#95C11F',
            },
            {
              name: 'ears',
              color : '#3AAA35',
            },
            {
              name: 'tail',
              color : '#ff7861',
            },
            {
              name: 'eyes',
              color : '#4cb2e9',
            },
            {
              name: 'head',
              color : '#42e964',
            },
            {
              name: 'legs',
              color : '#95C11F',
            },
          ]
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
