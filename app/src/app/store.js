import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/profiles/profilesSlice';

export const store = configureStore({
  reducer: {
    profiles: profileReducer 
  },
});
