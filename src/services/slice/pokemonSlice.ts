import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';

type Dictionary = {
  [key: string]: unknown;
};

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

export const pokemonRequest = createAsyncThunk('pokemon', async (payload: Dictionary, { dispatch }) => {
  const { per_page, page } = payload;
  const url = `pokemon`;

  try {
    const response = await api.get(url, {
      params: {
        per_page,
        page,
      },
    });
    console.log(response?.data, 'response?.data');
    return response?.data;
  } catch (err) {
    console.log(err, 'error');
    throw err;
  }
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    reset: state => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: builder => {
    builder.addCase(pokemonRequest.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(pokemonRequest.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(pokemonRequest.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const pokemonReset = pokemonSlice.actions.reset;
export const pokemonSliceReducer = pokemonSlice.reducer;
