import { configureStore } from '@reduxjs/toolkit';
import { personsReducer, noOfPersonsReducer } from '../ducks';

export const store = configureStore({
  reducer: {
    persons: personsReducer,
    noOfPersons: noOfPersonsReducer,
  },
});
