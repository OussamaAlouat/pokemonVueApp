import Vue from 'vue';
import Vuex from 'vuex';
import { AxiosResponse } from 'axios';
import { Pokemon } from '@/models/Pokemon';
import { Specie } from '@/models/Specie';
import { pokemonApiService } from '@/services/api';

Vue.use(Vuex);

export interface State {
  pokemons: Pokemon[],
  id: number | null,
  specie: Specie | null,
}

export default new Vuex.Store({
  state: {
    pokemons: [],
    id: null,
    specie: null,
  },
  mutations: {
    ADD_POKEMON(state: State, pokemon: Pokemon): void {
      state.pokemons.push(pokemon);
    },
    SET_ID(state: State, id: number) {
      state.id = id;
    },
    SET_SPECIES_OF_SELECTED_POKEMON(state: State, specie: Specie) {
      state.specie = specie;
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

    setId({ commit }, id: number): void {
      this.commit('SET_ID', id);
      this.dispatch('obteinTheSpecieOfSelectedPokemon');
    },

    obteinTheSpecieOfSelectedPokemon(): void {
      const poke = this.getters.getPokemonById;
      const specie = poke.species.name;
      console.log(specie, poke);
      pokemonApiService.getSpecies(specie).then((response: AxiosResponse) => {
        this.commit('SET_SPECIES_OF_SELECTED_POKEMON', response.data);
      });
    },
  },
  getters: {
    getPokemonById(state: State): Pokemon {
      return state.pokemons.find((poke) => poke.id === state.id)!;
    },
  },
  modules: {
  },
});
