import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { Dictionary } from '../../types';

interface InitState {
  data: Dictionary[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: unknown | null;
}

const initialState = {
  data: [],
  status: 'idle',
  error: null,
} as InitState;

export const savedPokemonRequest = createAsyncThunk('savedPokemon', async (payload: Dictionary[], {}) => {
  //   const url = `pokemon/${name}`;

  try {
    // const response = await api.get(url);

    // return {
    //   data: [response.data],
    //   next: null,
    //   previous: null,
    // };
    return payload;
  } catch (err) {
    console.log(err, 'error');
    throw err;
  }
});

const savedPokemonSlice = createSlice({
  name: 'savedPokemon',
  initialState,
  reducers: {
    reset: state => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: builder => {
    builder.addCase(savedPokemonRequest.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(savedPokemonRequest.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload || [];
      state.error = null;
    });
    builder.addCase(savedPokemonRequest.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const savedPokemonReset = savedPokemonSlice.actions.reset;
export const savedPokemonSliceReducer = savedPokemonSlice.reducer;
