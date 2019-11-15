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
                :transition="false"
        ></v-img>
    </div>
</template>

<script>
    import pngLama from "../../mixins/pngLama";
    export default {
        name: "LamaCute",
        mixins:[pngLama]
    }
</script>

<style scoped>
    #wrapper{
        padding-bottom: 70px;
        padding-top: 70px;
    }
</style>
