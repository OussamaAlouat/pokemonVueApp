import { Pokemon } from '@/models/Pokemon';
import { pokemonApiService } from '@/services/api';
import { AxiosResponse } from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface State {
  pokemons: Pokemon[],
}
export default new Vuex.Store({
  state: {
    pokemons: [],
  },
  mutations: {
    ADD_POKEMON(state: State, pokemon: Pokemon): void {
      state.pokemons.push(pokemon);
    },
  },
  actions: {
    loadData(): void {
      pokemonApiService.getAllPokemons().then((res: AxiosResponse) => {
        res.data.results.forEach((elem: { name: string, url: string }) => {
          const idOfPokemon = elem.url.split('pokemon/');
          console.log(elem, idOfPokemon[1]);
          pokemonApiService.getPokemonByName(elem.name).then((response) => {
            this.commit('ADD_POKEMON', response.data);
          });
        });
      });
    },
  },
  modules: {
  },
});
