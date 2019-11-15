<template>
  <v-container>
    <v-row>
      <v-col>
        <span class="grey--text font-italic">ferme à lama</span>
        <PresentationBox></PresentationBox>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PresentationBox from "../components/Farm/PresentationBox";

export default {
  name: 'farm',
  components: { PresentationBox }
}
</script>
