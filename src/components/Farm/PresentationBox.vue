<template>
    <div class="container">
        <div class="outer">
            <div class="frame"></div>
            <div class="background-top"></div>
            <div class="background-bottom"></div>
            <div class="lama-box">
                <LamaDrug></LamaDrug>
            </div>
        </div>
    </div>
</template>

<script>
    import LamaDrug from "../Lama/LamaDrug";
    export default {
        name: "PresentationBox",
        components: { LamaDrug }
    }
</script>

<style scoped>
    .container {
        position: absolute;
        top: 40%;
        left: 38%;
        width: 35%;
        height: 35%;
        border-top-right-radius: 50px;
        background: white;
    }

    .frame {
        position: absolute;
        top: 0%;
        left: 0%;
        width: 96%;
        height: 95%;
        border: 20px solid white;
        background-color: transparent;
        box-shadow: -10px -10px 30px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(0, 0, 0, 0.4);
        z-index: 10;
    }

    .background-top {
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 50%;
        background: linear-gradient(rgb(129, 193, 211), rgb(213, 228, 232));
    }

    .background-bottom {
        position: absolute;
        top: 50%;
        left: 0%;
        width: 100%;
        height: 50%;
        background: linear-gradient(rgb(196, 190, 21), rgb(107, 153, 44));
    }

    .lama-box {
        position: absolute;
        top: 20%;
        left: 0%;
        width: 100%;
        height: 60%;
    }
</style>