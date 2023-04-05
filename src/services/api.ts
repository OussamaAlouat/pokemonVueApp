import axiosInstance from '@/plugins/axios';
import { AxiosResponse } from 'axios';

import { Pokemon } from '@/models/Pokemon';

export default class PokeApi {
  /* eslint class-methods-use-this: "off" */
  public getAllPokemons(): Promise<AxiosResponse> {
    return axiosInstance.get('/pokemon');
  }

  public getPokemonByName(name: string): Promise<AxiosResponse> {
    return axiosInstance.get(`/pokemon/${name}`);
  }
}

export const pokemonApiService = new PokeApi();
