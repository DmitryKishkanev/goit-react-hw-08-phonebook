import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApiConnections } from '../auth';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (__, thunkAPI) => {
    try {
      const response = await privateApiConnections.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await privateApiConnections.post('/contacts', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/daleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await privateApiConnections.delete(
        `/contacts/${contactId}`,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ contactId, contact }, thunkAPI) => {
    try {
      const response = await privateApiConnections.patch(
        `/contacts/${contactId}`,
        contact,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
