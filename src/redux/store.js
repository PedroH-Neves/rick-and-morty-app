import { configureStore } from '@reduxjs/toolkit';
import charactersSlice from './characters/charactersSlice';
import episodesSlice from './episodes/episodesSlice';
import locationsSlice from './locations/locationsSlice';

const store = configureStore({
  reducer: {
    characters: charactersSlice,
    episodes: episodesSlice,
    locations: locationsSlice,
  },
});

export default store;
