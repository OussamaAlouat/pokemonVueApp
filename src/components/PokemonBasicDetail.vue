<template>
  <div class="basic-container">
    <img :src="image" :alt="pokemon.name" @click="addClick(pokemon.id)">
    <div class="text-container">
      <span>name: {{ pokemon.name }}</span>
      <span>heigth: {{ pokemon.height }}</span>
      <span>weigth: {{ pokemon.weight }}</span>
      <span>Base of experience:  {{ pokemon.base_experience }}</span>
      <span>Number of clicks: {{ pokemon.clicks }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action, Getter, State } from 'vuex-class';

import { Pokemon } from '@/models/Pokemon';

@Component
export default class PokemonBasicDetail extends Vue {
  @State('selectedPokemon')
  pokemon!: Pokemon;

  @Action('addClick')
  addClick!: (id: number) => void;

  get image():string {
    if (this.pokemon) {
      return this.pokemon.sprites.other?.home.front_default || '';
    }

    return '';
  }
}
</script>

<style scoped>
img {
  width: inherit;
  max-width: 350px;
}

.basic-container {
  display: flex;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: justify;
}

@media (max-width: 554px) {
  .basic-container {
    display: flex;
    flex-direction: column;
  }

  .text-container {
    text-align: center;
  }
}
</style>
