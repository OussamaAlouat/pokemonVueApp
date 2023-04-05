<template>
  <div class="container">
    <div class="card_list" v-for="poke of pokemos" :key="poke.id">
      <pokemon-card :pokemon="poke"/>
    </div>
  </div>
</template>

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

<style>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.card_list{
  max-width: 250px;
  max-height: 250px;
  margin-bottom: 10px;
  display: block;
  margin-left: 10px;
}

@media (max-width: 554px) {
  .card_list {
    margin-left: 0;
  }
}
</style>
