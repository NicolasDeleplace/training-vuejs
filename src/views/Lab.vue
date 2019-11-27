<template>
  <v-container class="mb-12">
    <v-form v-model="valid">
      <v-row>
        <v-col>
          <h1 class="display">Labo à lama</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-alert color="blue" text border="left">
            Le but de cet exercice est d'effectué un "two way binding" entre les différents champs du formulaire et le récapitulatif situé en dessous.<br/>
            Vous devrez : <br/>
            - Déclarer vos variables dans la partie "data" du composant <span class="font-weight-bold">"views/lab.vue"</span><br/>
            - Lier les variables aux champs du formulaire<br/>
            - Afficher la valeur des variables dans la partie "récapitulatif"<br/>
            Tips: l'attribut <span class="font-weight-bold">"v-model"</span> permet de lier un champs du formulaire avec une variable du composant.
          </v-alert>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
                  outlined
                  placeholder="Nom de votre lama"
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
          <v-slider
                  min="0"
                  max="200"
                  prepend-icon="mdi-ruler"
          ></v-slider>
        </v-col>
        <v-col cols="6">
          <v-slider
                  min="0"
                  max="200"
                  prepend-icon="mdi-weight-kilogram"
          ></v-slider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>
              Récapitulatif de votre lama :
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <span class="font-weight-bold">Nom :</span>
                  <span class="ml-2 blue--text">Nom du lama</span>
                </v-col>
                <v-col cols="12">
                  <span class="font-weight-bold">Age : </span>
                  <span class="ml-2 blue--text">Age du lama</span>
                </v-col>
                <v-col cols="12">
                  <span class="font-weight-bold">Taille :</span>
                  <span class="ml-2 blue--text">Taille du lama</span>
                </v-col>
                <v-col cols="12">
                  <span class="font-weight-bold">Poids :</span>
                  <span class="ml-2 blue--text">Poids du lama</span>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
  export default {
    name: 'lab',
    data: () => ({
      valid: false,
      lama:{
        // todo déclarer les variables : name, age, weight et height
      },
    }),
    methods: {
    },
  }
</script>
