<template>
  <div class="container">
    <pokemon-card v-for="poke of pokemos" :pokemon="poke" :key="poke.id"></pokemon-card>
  </div>
</template>
<style>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { Pokemon } from '@/models/Pokemon';
import PokemonCard from './PokemonCard.vue';

@Component({
  components: {
    PokemonCard,
  },
})
export default class PokemonList extends Vue {
  list: Pokemon[]= [] as Pokemon[];

  poke: any;

  @Action('loadData')
  loadData!: () => void;

  @State('pokemons')
  pokemos!:Pokemon[];

  mounted(): void {
    this.loadData();
  }
}
</script>;
