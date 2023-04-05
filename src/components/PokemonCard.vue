<template>
  <div class="card">
    <div v-if="!clicked" @click="clicked=!clicked">
      <span>{{ pokemon.name }}</span>
      <div class="image_box">
        <img :src="image" :alt="pokemon.name">
      </div>
    </div>
    <div v-else>
      <p>name: {{ pokemon.name }}</p>
      <p>heigth: {{ pokemon.height }}</p>
      <p>weigth: {{ pokemon.weight }}</p>

    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Pokemon } from '@/models/Pokemon';

@Component
export default class PokemonCard extends Vue {
  @Prop() pokemon!: Pokemon;

  clicked = false;

  mounted() {
    console.log(this.pokemon);
  }

  get image():string {
    return this.pokemon.sprites.other?.home.front_default || '';
  }

  get abilities(): string {
    console.log(this.pokemon);
    return '';
  }
}
</script>

<style>
.card {
  width: 100%;
  min-width: 100px;
  min-height: 100px;
  background: #FCE4CA;
  border-radius: 5px;
}

.image_box {
  display: grid;
  height: 100%;
}

img {
  padding: 0;
  display: block;
  margin: 0 auto;
  max-height: 100%;
  max-width: 100%;
}
</style>
