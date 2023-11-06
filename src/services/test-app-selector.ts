import { pokemonSliceReducer } from './slice';
const state = {
  pokemon: pokemonSliceReducer,
};

export const testAppSelector = (f: any) => f(state);
