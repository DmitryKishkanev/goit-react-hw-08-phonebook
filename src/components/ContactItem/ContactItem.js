import { useDispatch, useSelector } from 'react-redux';
import { ContactEl } from 'components/ContactItem/ContactItem.styled';
import { selectFilteredContacts, deleteContact } from '../../redux/phonebook';

const ContactItem = () => {
  // Перенесли фильтрацию в selectors
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactEl key={id}>
          <div>
            <p>
              {name}: {phone}
            </p>

            <button onClick={() => handleDeleteContact(id)}>Delete</button>
          </div>
        </ContactEl>
      ))}
    </>
  );
};

export default ContactItem;
