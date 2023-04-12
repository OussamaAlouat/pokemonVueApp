<template>
  <div class="container">
    <div class="list-names">
      <li
        :class="{
          'name': true,
          'selected': isSelected(poke.name)
        }"
        v-for="poke of pokemonNames"
        :key="poke.name"
        @click="loadPokemon(poke.name)"
      >
        {{ poke.name }}
      </li>
    </div>
    <div class="detail-container">
      <pokemon-basic-detail v-if="pokemon"></pokemon-basic-detail>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { Pokemon } from '@/models/Pokemon';
import PokemonBasicDetail from '@/components/PokemonBasicDetail.vue';

@Component({
  components: {
    PokemonBasicDetail,
  },
})
export default class PokemonList extends Vue {
  @Action('loadData')
  loadData!: () => void;

  @State('pokemonNames')
  pokemonNames!: Pokemon[];

  @State('selectedPokemon')
  pokemon!: Pokemon;

  mounted(): void {
    if (this.pokemonNames.length === 0) {
      this.loadData();
    }
  }

  @Action('getPokemonInformation')
  getPokemonInformation!: (name: string) => void;

  loadPokemon(name: string): void {
    this.getPokemonInformation(name);
  }

  isSelected(name: string): boolean {
    if (this.pokemon) {
      return name === this.pokemon.name;
    }

    return false;
  }
}
</script>;

<style>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.list-names {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 25%;
  list-style-type: none;
  text-align: justify;
}
.detail-container {
  width: 75%;
  display: flex;
  justify-content: center;
}

.name:hover {
  cursor: pointer;
}

.selected {
  color: red;
}
</style>
