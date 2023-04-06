<template>
  <div>
    <div class="card" @click="countClicks()" v-if="!clicked">
      <div class="title">{{ pokemon.name }}</div>
      <div class="image_box">
        <img :src="image" :alt="pokemon.name">
      </div>
    </div>
    <div v-else class="card">
      <div class="card_text mr-10" @click="countClicks()">
        <span>name: {{ pokemon.name }}</span>
        <span>heigth: {{ pokemon.height }}</span>
        <span>weigth: {{ pokemon.weight }}</span>
        <span>Base of experience:  {{ pokemon.base_experience }}</span>
        <span>Number of clicks: {{ clicks }}</span>
      </div>
      <button class="mr-10" @click="goToDetails()">More info</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Pokemon } from '@/models/Pokemon';
import { Action } from 'vuex-class';

@Component
export default class PokemonCard extends Vue {
  @Prop() pokemon!: Pokemon;

  clicks = 0;

  clicked = false;

  countClicks() {
    if (!this.clicked) {
      this.clicks += 1;
    }

    this.clicked = !this.clicked;
  }

  mounted() {
    console.log(this.pokemon);
  }

  goToDetails() {
    console.log(this);
  }

  get image():string {
    return this.pokemon.sprites.other?.home.front_default || '';
  }

  get abilities(): any {
    return this.pokemon.abilities;
  }
}
</script>

<style scoped>
.card {
  min-width: 250px;
  min-height: 250px;
  width: 100%;
  background: #f8f8f8;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.image_box {
  display: grid;
  height: 100%;
}

img {
  padding: 0;
  display: block;
  margin: 0 auto;
  max-height: 80%;
  max-width: 80%;
}

.title {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card_text {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}

.mr-10 {
  margin: 10px;
}
</style>
