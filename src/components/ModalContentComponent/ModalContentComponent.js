import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';

import { updateContact, selectContacts } from '../../redux/phonebook';

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
        <DialogTitle style={{ textAlign: 'center' }}>Edit contact</DialogTitle>

        <Formik
          initialValues={initialValue}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, handleChange }) => (
            <Form>
              <DialogContent style={{ padding: '10px 24px' }}>
                <TextField
                  margin="dense"
                  label="Name"
                  name="name"
                  fullWidth
                  value={values.name}
                  onChange={handleChange}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />

                <TextField
                  margin="dense"
                  label="Number"
                  name="number"
                  fullWidth
                  value={values.number}
                  onChange={handleChange}
                  error={touched.number && Boolean(errors.number)}
                  helperText={touched.number && errors.number}
                />
              </DialogContent>

              <DialogActions>
                <Button type="button" onClick={onClose}>
                  Cancel
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  disabled={!values.name || !values.number}
                >
                  Save
                </Button>
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
