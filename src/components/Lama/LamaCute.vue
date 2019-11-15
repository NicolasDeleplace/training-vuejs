<template>
    <div class="text-center" id="wrapper">
        <v-img
                class="mx-auto"
                src="../../assets/lama_cute.png"
                :style="getStyle()"
                @load="loaded = true"
                aspect-ratio="1"
                max-height="280px"
                max-width="268px"
                transition=""
        ></v-img>
    </div>
</template>

<script>
  export default {
    name: "LamaCute",
    props: ['options'],
    data: () => ({
      loaded: false,
    }),
    methods:{
      getStyle(){
        if(this.loaded) {
          let gradient = ''
          switch (this.options.mode) {
            case 'image':
              return `background: url('${this.options.image}') no-repeat center; background-size: cover;`
            case 'color':
              return `background-color: ${this.options.color};`
            case 'gradient':
              gradient = `background-image: linear-gradient(to ${this.options.gradient.direction}`
              for (const color of this.options.gradient.colors) {
                gradient += `, ${color}`
              }
              gradient += ');'
              return gradient
          }
        }
      }
    }
  }
</script>

<style scoped>
    #wrapper{
        padding-bottom: 70px;
        padding-top: 70px;
    }
</style>
