<template>
  <div>
    <div v-if="specie">
      <div>
        <img :src="image" :alt="pokemon.name">
      </div>
      <div class="mb-10">
        <h2>Specie</h2>
        <div class="description_container">
          <span>Base of happiness: {{ specie.base_happiness }}</span>
          <span>Capture Rate: {{ specie.capture_rate }}</span>
          <span>Color: {{ specie.color.name }}</span>
          <span>Habitat: {{ specie.habitat.name }}</span>
        </div>
        <h2>Habilidades</h2>
        <div class="description_container">
          <span v-for="ablity of pokemon.abilities" :key="ablity.ability.url">
            {{ ablity.ability.name }}
          </span>
        </div>
      </div>
    </div>
    <div v-else>
      Loading ...
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action, Getter, State } from 'vuex-class';

import { Pokemon } from '@/models/Pokemon';
import { Specie } from '@/models/Specie';

@Component
export default class PokemonDetail extends Vue {
  @Prop() id!: number;

  public pokemon!: Pokemon;

  @Getter('getPokemonById')
  getPokemonById!: Pokemon;

  @Action('setId')
  setId!: (id: number) => void;

  @State('specie')
  specie!: Specie;

  created() {
    this.setId(this.id);
    this.pokemon = this.getPokemonById;
  }

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
  max-width: 400px;
}
.description_container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

@media (max-width: 554px) {
  .description_container {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

.mb-10 {
  margin-bottom: 10px;
}
</style>
