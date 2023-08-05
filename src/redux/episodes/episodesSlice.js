import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEpisodes = createAsyncThunk('episodes/fetchEpisodes', async () => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/episode');
    return response.data || [];
  } catch (err) {
    return 'Fetch error';
  }
});

const initialState = {
  episodes: [],
  status: 'Loading',
  error: null,
};

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchEpisodes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.chatacters = action.payload;
      })
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default episodesSlice.reducer;
