<template>
    <v-tabs
            grow
            v-model="tab"
            background-color="deep-purple accent-4"
            class="elevation-2"
            dark
    >
        <v-tabs-slider></v-tabs-slider>

        <v-tab :key="1" :href="`#tab-${1}`" @click="options.mode = 'color'">
            Color
        </v-tab>
        <v-tab :key="2" :href="`#tab-${2}`" @click="options.mode = 'gradient'">
            Gradient
        </v-tab>
        <v-tab :key="3" :href="`#tab-${3}`" @click="options.mode = 'image'">
            Image
        </v-tab>

        <v-tab-item :key="1" :value="'tab-' + 1">
            <v-card flat tile>
                <v-card-text>
                    <v-color-picker class="mx-auto " v-model="options.color" hide-canvas hide-inputs></v-color-picker>
                </v-card-text>
            </v-card>
        </v-tab-item>
        <v-tab-item :key="2" :value="'tab-' + 2">
            <v-card flat tile>
                <v-card-text class="text-center">
                    <v-btn-toggle v-model="options.gradient.direction" class="mb-2">
                        <v-btn value="top left">
                            <v-icon>mdi-arrow-top-left</v-icon>
                        </v-btn>
                        <v-btn value="top">
                            <v-icon>mdi-arrow-up</v-icon>
                        </v-btn>
                        <v-btn value="top right">
                            <v-icon>mdi-arrow-top-right</v-icon>
                        </v-btn>
                        <v-btn value="bottom left">
                            <v-icon>mdi-arrow-bottom-left</v-icon>
                        </v-btn>
                        <v-btn value="bottom">
                            <v-icon>mdi-arrow-down</v-icon>
                        </v-btn>
                        <v-btn value="bottom right">
                            <v-icon>mdi-arrow-bottom-right</v-icon>
                        </v-btn>
                    </v-btn-toggle>
                    <v-color-picker class="mx-auto mb-2" v-model="options.gradient.colors[0]" hide-canvas hide-inputs></v-color-picker>
                    <v-color-picker class="mx-auto " v-model="options.gradient.colors[1]" hide-canvas hide-inputs></v-color-picker>
                </v-card-text>
            </v-card>
        </v-tab-item>
        <v-tab-item :key="3" :value="'tab-' + 3">
            <v-card flat tile>
                <v-card-text>
                    <v-text-field v-model="options.image" placeholder="Url de l'image"></v-text-field>
                </v-card-text>
            </v-card>
        </v-tab-item>
    </v-tabs>
</template>

<script>
  export default {
    name: "LamaCuteOptions",
    props: ['options'],
    data:()=>({
      tab: null,
    })
  }
</script>

<style scoped>

</style>
