import { combineReducers } from '@reduxjs/toolkit';

import { pokemonSliceReducer, singlPokemonSliceReducer } from './slice';

const rootReducer = combineReducers({
  pokemon: pokemonSliceReducer,
  singlePokemon: singlPokemonSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
