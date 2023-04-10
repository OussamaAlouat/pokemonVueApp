<template>
  <div v-if="idOfPokemon">
    <pokemon-detail :id="idOfPokemon"></pokemon-detail>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PokemonDetail from '@/components/PokemonDetail.vue';

@Component({
  components: {
    PokemonDetail,
  },
})
export default class PokemonDetailView extends Vue {
  idOfPokemon!: number;

  created():void {
    this.idOfPokemon = parseInt(this.$route.params.id);
  }
}
</script>
