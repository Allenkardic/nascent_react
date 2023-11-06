import { combineReducers } from '@reduxjs/toolkit';

import { pokemonSliceReducer } from './slice';

const rootReducer = combineReducers({
  pokemon: pokemonSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
