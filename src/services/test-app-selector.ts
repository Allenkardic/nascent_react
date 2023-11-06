import { pokemonSliceReducer, singlPokemonSliceReducer } from './slice';
const state = {
  pokemon: pokemonSliceReducer,
  singlePokemon: singlPokemonSliceReducer,
};

export const testAppSelector = (f: any) => f(state);
