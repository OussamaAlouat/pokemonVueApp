<template>
  <div>
    Pokemon detail component
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { Pokemon } from '@/models/Pokemon';

@Component
export default class PokemonDetail extends Vue {
  @Prop() id!: number;

  public pokemon!: Pokemon;

  @Getter('getPokemonById')
  getPokemonById!: Pokemon;

  @Action('setId')
  setId!: (id: number) => void;

  mounted() {
    this.setId(this.id);
    this.pokemon = this.getPokemonById;
    console.log(this.pokemon);
  }
}
</script>
