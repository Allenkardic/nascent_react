import { pokemonSliceReducer, singlPokemonSliceReducer, savedPokemonSliceReducer } from './slice';
const state = {
  pokemon: pokemonSliceReducer,
  singlePokemon: singlPokemonSliceReducer,
  savedPokemon: savedPokemonSliceReducer,
};

export const testAppSelector = (f: any) => f(state);
