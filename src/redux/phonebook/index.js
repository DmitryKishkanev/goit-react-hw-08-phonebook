export { fetchContacts, addContact, deleteContact } from './operations';

export {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilter,
  selectFilteredContacts,
} from './selectors';

export { setFilter } from './filterSlice';

export { phonebookSlice } from './phonebookSlice';
export { phonebookFilterSlice } from './filterSlice';
