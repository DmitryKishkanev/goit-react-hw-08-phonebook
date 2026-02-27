import { configureStore } from '@reduxjs/toolkit';
import { phonebookSlice } from './phonebook';
import { phonebookFilterSlice } from './phonebook';

export const store = configureStore({
  reducer: {
    contacts: phonebookSlice.reducer,
    filter: phonebookFilterSlice.reducer,
  },
});
