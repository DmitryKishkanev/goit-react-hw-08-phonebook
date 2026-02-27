import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { phonebookInitialState } from './initialState';
import { fetchContacts, addContact, deleteContact } from './operations';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

// const arrThunks = [fetchContacts, addContact, deleteContact];
const arrThunks = [fetchContacts, addContact];

const oneOfTheThunks = type => arrThunks.map(el => el[type]);

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledFetch = (state, action) => {
  state.items = action.payload;
};

const handleFulfilledAdd = (state, action) => {
  // Добавляем контакт в конец списка
  // state.items.push(action.payload);
  // Добавляем контакт в начало списка
  state.items.unshift(action.payload);
  // Добавляем контакт в начало списка
  // state.items = [action.payload, ...state.items];
};

const handleFulfilledDel = (state, action) => {
  // const index = action.meta.arg;
  const index = action.payload.id;
  state.items = state.items.filter(contact => contact.id !== index);
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: phonebookInitialState.contacts,

  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;

    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledFetch)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDel)
      .addMatcher(isAnyOf(...oneOfTheThunks(PENDING)), handlePending)
      .addMatcher(isAnyOf(...oneOfTheThunks(FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...oneOfTheThunks(REJECTED)), handleRejected);
  },
});
