import axiosInstance from '@/plugins/axios';
import { AxiosResponse } from 'axios';

export default class PokeApi {
  /* eslint class-methods-use-this: "off" */
  public getAllPokemons(): Promise<AxiosResponse> {
    return axiosInstance.get('/pokemon');
  }

  public getPokemonByName(name: string): Promise<AxiosResponse> {
    return axiosInstance.get(`/pokemon/${name}`);
  }

  public getSpecies(specie: string): Promise<AxiosResponse> {
    return axiosInstance.get(`/pokemon-species/${specie}`);
  }
}

export const pokemonApiService = new PokeApi();
