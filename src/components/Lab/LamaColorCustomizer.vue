<template>
    <v-row v-if="lama.type">
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
    </v-row>
</template>

<script>
import LamaCuteOptions from "../Lama/LamaCuteOptions";
import LamaRegular from "../Lama/LamaRegular";
import LamaGirly from "../Lama/LamaGirly";
import LamaChic from "../Lama/LamaChic";
import LamaDrug from "../Lama/LamaDrug";
import LamaCute from "../Lama/LamaCute";
import LamaUnicorn from "../Lama/LamaUnicorn";

export default {
  components: {LamaCuteOptions, LamaRegular, LamaGirly, LamaChic, LamaDrug, LamaCute, LamaUnicorn},
  props: ['lama'],
  methods:{
    getColor(name){
      return this.options.find(o => o.name === name).color
    }
  }
};
</script>

<style scoped>

</style>
