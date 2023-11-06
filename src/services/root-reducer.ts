import { combineReducers } from '@reduxjs/toolkit';

import { pokemonSliceReducer, singlPokemonSliceReducer, savedPokemonSliceReducer } from './slice';

const rootReducer = combineReducers({
  pokemon: pokemonSliceReducer,
  singlePokemon: singlPokemonSliceReducer,
  savedPokemon: savedPokemonSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
