<template>
  <v-container>
    <v-row>
      <v-col>
        <span class="grey--text font-italic">labo à lama</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-color-picker v-model="lama.color"></v-color-picker>
      </v-col>
      <v-col>
        <v-select
          :items="types"
          v-model="lama.type"
          label="Type de lama"
          item-text="name"
          item-value="component"
        ></v-select>
        <v-row>
          <v-col v-for="(option, name, index) in options" :key="option+'_'+index">
            <div class="text-center">
              <v-menu top offset-y :close-on-click="false" :close-on-content-click="false">
                <template v-slot:activator="{ on }">
                  <v-btn :color="options[name]" v-on="on">
                    {{ name.toUpperCase() }}
                    <v-icon class="ml-2">mdi-format-color-fill</v-icon>
                  </v-btn>
                </template>
                <v-color-picker v-model="options[name]" />
              </v-menu>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <v-row>
            <v-col class="text-center">
              <keep-alive>
                  <component :is="lama.type" :color="lama.color" :options="options"></component>
              </keep-alive>
            </v-col>
          </v-row>
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
  name: 'lab',
  components: {LamaRegular, LamaGirly, LamaChic, LamaDrug, LamaCute},
  computed: {
    options() {
      return this.types.find(x => x.component === this.lama.type).options;
    }
  },
  data: () => ({
    lama:{
      color: '#ffffff',
      name: '',
      age: 0,
      height:0,
      weight:0,
      type:'lama-drug'
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
          mouth: '#000',
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
  })
}
</script>
