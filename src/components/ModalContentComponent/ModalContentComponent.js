import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { Dialog, DialogActions } from '@mui/material';
import { updateContact, selectContacts } from '../../redux/phonebook';
import {
  ModalTitle,
  ModalContent,
  ModalTextField,
  ModalButton,
} from './ModalContentComponent.styled';

const schema = object({
  name: string().required(),
  number: string().min(7).max(12).required(),
});

const initialValue = {
  name: '',
  number: '',
};

const ModalContentComponent = ({ onClose, contactId, open }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    const isNamePresent = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (isNamePresent) {
      toast.error(`${newContact.name} is already in contacts `, {
        theme: 'colored',
      });
      return;
    }

    dispatch(
      updateContact({
        contactId: contactId,
        contact: newContact,
      }),
    );

    resetForm();
    onClose();
    toast.success('Сontact added successfully', { theme: 'colored' });
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <ModalTitle>Edit contact</ModalTitle>

        <Formik
          initialValues={initialValue}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, handleChange }) => (
            <Form>
              <ModalContent>
                <ModalTextField
                  margin="dense"
                  label="Name"
                  name="name"
                  fullWidth
                  value={values.name}
                  onChange={handleChange}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />

                <ModalTextField
                  margin="dense"
                  label="Number"
                  name="number"
                  fullWidth
                  value={values.number}
                  onChange={handleChange}
                  error={touched.number && Boolean(errors.number)}
                  helperText={touched.number && errors.number}
                />
              </ModalContent>

              <DialogActions>
                <ModalButton variant="outlined" type="button" onClick={onClose}>
                  Cancel
                </ModalButton>

                <ModalButton
                  type="submit"
                  variant="contained"
                  disabled={!values.name || !values.number}
                >
                  Save
                </ModalButton>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>

      <ToastContainer position="top-center" autoClose={5000} />
    </>
  );
};

ModalContentComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
  contactId: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ModalContentComponent;
