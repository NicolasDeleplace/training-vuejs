<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col>
          <h1 class="display">Labo à lama</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-alert color="blue" text border="left">
            Le but de cet exercice est d'effectué une validation dynamique du formulaire de creation du lama. Les objectifs sont : <br/>
            - Lier les différentes variables définissant notre lama aux champs du formulaire<br/>
            - Attribuer des règles aux champs du formulaire (nom !== ' ', taille age et poids > 0)<br/>
            - Lier l'état du formulaire à une variable"<br/>
            - Désactiver le bouton quand le formulaire n'est pas valide<br/>
            Tips: l'attribut <span class="font-weight-bold">"rules"</span> permet de definir un tableau de règles que le champs devra suivre afin d'être jugé valide.
            Tips: l'attribut <span class="font-weight-bold">"v-model"</span> sur un "v-form" permet de lier une variable de type boolean à l'état du formulaire.
          </v-alert>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
                  label="Nom"
                  outlined
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
                  outlined
                  prepend-icon="mdi-cake-variant"
                  type="number"
                  label="Âge"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          {{lama.height}}cm
          <v-slider
                  min="0"
                  max="200"
                  prepend-icon="mdi-ruler"
          ></v-slider>
        </v-col>
        <v-col cols="6">
          {{lama.weight}}
          <v-slider
                  min="0"
                  max="200"
                  prepend-icon="mdi-weight-kilogram"
          ></v-slider>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <v-btn color="blue" dark @click="verifValidation">Verifier</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
  import {EventBus} from "../eventBus";

  export default {
    name: 'lab',
    data: () => ({
      lama:{
        name: '',
        age: 0,
        height: 0,
        weight: 0,
      },
    }),
    methods: {
      verifValidation(){
        if(this.lama.name !== ''
          && this.lama.height > 0
          && this.lama.weight > 0
          && this.lama.age > 0
        ){
          EventBus.$emit('show-snack', {
            message: 'Votre validation à l\'air de fonctionner :O',
            type: 'info'
          })
        }else{
          EventBus.$emit('show-snack', {
            message: 'Hum... ça m\'a pas l\'air encore parfait !',
            type: 'error'
          })
        }
      }
    },
  }
</script>
