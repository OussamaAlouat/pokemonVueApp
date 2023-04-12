<template>
  <div class="container-text">
    Please, select one pokemon from the list
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PokemonNotSelected extends Vue {}
</script>

<style scoped>
.container-text {
  display: flex;
  justify-content: center;
   align-items: center;
}

</style>
