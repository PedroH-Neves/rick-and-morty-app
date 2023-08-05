import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLocations = createAsyncThunk('locations/fetchLocations', async () => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/location');
    return response.data || [];
  } catch (err) {
    return 'Fetch error';
  }
});

const initialState = {
  locations: [],
  status: 'Loading',
  error: null,
};

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.chatacters = action.payload;
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default locationsSlice.reducer;
