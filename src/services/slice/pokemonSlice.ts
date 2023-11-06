import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';
import { getApiOffsetFromUrl } from '../../utils';

type Dictionary = {
  [key: string]: any;
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

async function fetchPokemonData(pokemon: { url?: string }) {
  if (!pokemon.url) {
    console.error('Missing or invalid Pokemon URL.');
    return null;
  }

  try {
    const response = await fetch(pokemon.url);
    if (!response.ok) {
      console.error('Failed to fetch Pokemon data:', response.status, response.statusText);
      return null;
    }

    return response.json();
  } catch (error) {
    console.error('An error occurred while fetching Pokemon data:', error);
    return null;
  }
}

export const pokemonRequest = createAsyncThunk('pokemon', async (payload: Dictionary, { dispatch }) => {
  const { page } = payload;
  const url = `pokemon`;

  try {
    const response = await api.get(url, {
      params: {
        offset: page,
        limit: 30,
      },
    });
    const pokemonData = await Promise.all(
      response.data.results.map((pokemon: Dictionary) => fetchPokemonData(pokemon)),
    );

    // console.log(pokemonData, 'result');
    // console.log(response.data, 'result');
    // return pokemonData;

    return {
      data: pokemonData,
      next: getApiOffsetFromUrl(response?.data?.next),
      previous: getApiOffsetFromUrl(response?.data?.previous),
    };
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
