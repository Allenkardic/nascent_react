import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';
import { Dictionary } from '../../types';

interface InitState {
  data: Dictionary;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: unknown | null;
}

const initialState = {
  data: {},
  status: 'idle',
  error: null,
} as InitState;

export const singlPokemonRequest = createAsyncThunk('singlePokemon', async (payload: Dictionary, {}) => {
  const { name } = payload;
  const url = `pokemon/${name}`;

  try {
    const response = await api.get(url);

    // console.log(response.data, 'response.data');
    return {
      data: [response.data],
      next: null,
      previous: null,
    };
  } catch (err) {
    console.log(err, 'error');
    throw err;
  }
});

const singlPokemonSlice = createSlice({
  name: 'singlPokemon',
  initialState,
  reducers: {
    reset: state => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: builder => {
    builder.addCase(singlPokemonRequest.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(singlPokemonRequest.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(singlPokemonRequest.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const singlPokemonReset = singlPokemonSlice.actions.reset;
export const singlPokemonSliceReducer = singlPokemonSlice.reducer;
