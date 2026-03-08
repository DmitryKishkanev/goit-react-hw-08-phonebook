import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactEl } from 'components/ContactItem/ContactItem.styled';
import { selectFilteredContacts, deleteContact } from '../../redux/phonebook';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalContentComponent from '../ModalContentComponent';

const ContactItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(null);

  // Перенесли фильтрацию в selectors
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleOpenModal = id => {
    setSelectedContactId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedContactId(null);
  };

  return (
    <>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactEl key={id}>
          <div>
            <p>
              {name}: {number}
            </p>

            <div>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => handleDeleteContact(id)}
              >
                Delete
              </Button>

              <Button variant="outlined" onClick={() => handleOpenModal(id)}>
                Edit
              </Button>
            </div>
          </div>

          {selectedContactId && (
            <ModalContentComponent
              open={isModalOpen}
              onClose={handleCloseModal}
              contactId={selectedContactId}
            />
          )}
        </ContactEl>
      ))}
    </>
  );
};

export default ContactItem;
