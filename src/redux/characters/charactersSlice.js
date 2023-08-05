import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async () => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    return response.data || [];
  } catch (err) {
    return 'Fetch error';
  }
});

const initialState = {
  chatacters: [],
  status: 'Loading',
  error: null,
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.chatacters = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default charactersSlice.reducer;
