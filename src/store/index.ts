import Vue from 'vue';
import Vuex from 'vuex';
import { AxiosResponse } from 'axios';
import { Pokemon, PokemonNames } from '@/models/Pokemon';
import { Specie } from '@/models/Specie';
import { pokemonApiService } from '@/services/api';

Vue.use(Vuex);

export interface State {
  pokemons: Pokemon[],
  id: number | null,
  specie: Specie | null,
  selectedPokemon: Pokemon | undefined,
  pokemonNames: PokemonNames[],
}

export default new Vuex.Store({
  state: {
    pokemons: [],
    id: null,
    specie: null,
    pokemonNames: [],
    selectedPokemon: undefined,
  },
  mutations: {
    SET_ALL_POKEMON_NAMES(state: State, pokemonList: PokemonNames[]) {
      state.pokemonNames = pokemonList;
    },
    ADD_POKEMON(state: State, pokemon: Pokemon): void {
      state.pokemons.push(pokemon);
    },
    SET_ID(state: State, id: number) {
      state.id = id;
    },
    SET_SPECIES_OF_SELECTED_POKEMON(state: State, specie: Specie) {
      state.specie = specie;
    },
    SET_SELECTED_POKEMON(state: State, pokemon: Pokemon): void {
      state.selectedPokemon = pokemon;
    },
    INCRESED_CLICK(state: State): void {
      if (state.selectedPokemon !== undefined && state.selectedPokemon.id) {
        state.selectedPokemon.clicks += 1;
      }
    },
  },
  actions: {
    loadData(): void {
      pokemonApiService.getAllPokemons().then((res: AxiosResponse) => {
        this.commit('SET_ALL_POKEMON_NAMES', res.data.results);
      });
    },

    getPokemonInformation({ commit, state }, name: string): void {
      const finded = this.state.pokemons.find((poke) => poke.name === name);
      if (finded) {
        this.commit('SET_SELECTED_POKEMON', finded);
      } else {
        pokemonApiService.getPokemonByName(name).then((res: AxiosResponse) => {
          const pokemon = {
            ...res.data,
            clicks: 0,
          };
          this.commit('ADD_POKEMON', pokemon);
          this.commit('SET_SELECTED_POKEMON', pokemon);
        });
      }
    },

    setId({ commit }, id: number): void {
      this.commit('SET_ID', id);
      this.dispatch('obteinTheSpecieOfSelectedPokemon');
    },

    obteinTheSpecieOfSelectedPokemon(): void {
      const poke = this.getters.getPokemonById;
      const specie = poke.species.name;
      pokemonApiService.getSpecies(specie).then((response: AxiosResponse) => {
        this.commit('SET_SPECIES_OF_SELECTED_POKEMON', response.data);
      });
    },

    addClick({ commit }, id: number) {
      this.commit('INCRESED_CLICK');
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
