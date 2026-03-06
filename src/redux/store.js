import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './auth';
import { phonebookSlice } from './phonebook';
import { phonebookFilterSlice } from './phonebook';

const authPersistConfig = {
  key: 'auth',
  storage,
  // token из authInitialState сохраняется в local storage
  whitelist: ['token'],
};

const persistAuthReducer = persistReducer(authPersistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    contacts: phonebookSlice.reducer,
    filter: phonebookFilterSlice.reducer,
  },

  //Middleware в Redux — это промежуточное программное обеспечение (прослойка), расположенное между отправкой действия (dispatch) и редьюсером (reducer).
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
