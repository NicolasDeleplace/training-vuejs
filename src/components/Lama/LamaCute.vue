<template>
    <div class="text-center" id="wrapper">
        <v-img
                class="mx-auto"
                src="../../assets/lama_cute.png"
                :style="{backgroundColor: color}"
                aspect-ratio="1"
                max-height="270px"
                max-width="270px"
        ></v-img>
    </div>
</template>

<script>
  export default {
    name: "LamaCute",
    props: ['color']
  }
</script>

<style scoped>
    #wrapper{
        padding-bottom: 70px;
        padding-top: 70px;
    }
</style>
