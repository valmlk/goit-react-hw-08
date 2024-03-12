import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filtersSlice';
import { contactsReducer } from './contactsSlice';


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
  },
});

