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
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <v-row>
            <v-col class="text-center">
              <keep-alive>
                  <component :is="lama.type" :color="lama.color"></component>
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
        component: 'lama-chic'
      },
      {
        name: 'Lama Cute',
        component: 'lama-cute'
      },
      {
        name: 'Lama Louche',
        component: 'lama-drug'
      },
      {
        name: 'Lama Girly',
        component: 'lama-girly'
      },
      {
        name: 'Lama Normal',
        component: 'lama-regular'
      },
    ]
  })
}
</script>
