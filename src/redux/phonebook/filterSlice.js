import { createSlice } from '@reduxjs/toolkit';
import { phonebookInitialState } from './initialState';

export const phonebookFilterSlice = createSlice({
  name: 'filter',
  initialState: phonebookInitialState.filter,
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const { setFilter } = phonebookFilterSlice.actions;
