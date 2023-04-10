<template>
  <PokemonList></PokemonList>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PokemonList from '../components/PokemonList.vue'; // @ is an alias to /src

@Component({
  components: {
    PokemonList,
  },
})
export default class PokemonHome extends Vue {}
</script>
