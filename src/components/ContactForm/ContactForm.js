import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { FormContainer } from 'components/ContactForm/ContactForm.styled';
import {
  addContact,
  selectContacts,
  selectIsLoading,
} from '../../redux/phonebook';
import Button from '@mui/material/Button';

const schema = object({
  name: string().required(),
  number: string().min(7).max(12).required(),
});

const initialValue = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
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
      resetForm();
      return;
    }

    dispatch(addContact(newContact));

    resetForm();
    toast.success('Сontact added successfully', { theme: 'colored' });
  };

  return (
    <div>
      <Formik
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <FormContainer>
          <label>
            <span>Name</span>
            <Field type="text" name="name" required />
            <ErrorMessage name="name" />
          </label>

          <label>
            <span>Number</span>
            <Field type="tel" name="number" required />
            <ErrorMessage name="number" />
          </label>
          {/* 
          <button
            type="submit"
            disabled={isLoading}
            className="phonebook__button"
          >
            {isLoading && '☎'} Добавить
          </button> */}
          <Button variant="contained" type="submit" disabled={isLoading}>
            {isLoading && '☎'} Add
          </Button>
        </FormContainer>
      </Formik>

      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
};

export default ContactForm;
