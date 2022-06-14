import { configureStore } from '@reduxjs/toolkit';
import personsReducer from '../ducks/person';

export const store = configureStore({
  reducer: {
    persons: personsReducer,
  },
});
