import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  // ContactFormBackdrop,
  ContactFormWrapper,
  ContactFormTitle,
  ContactFormBox,
  ContactFormTextField,
  ContactFormBacButton,
} from 'components/ContactForm/ContactForm.styled';
import {
  addContact,
  selectContacts,
  selectIsLoading,
} from '../../redux/phonebook';

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
    // <ContactFormBackdrop>
    <ContactFormWrapper>
      <ContactFormTitle variant="h5">Add a new contact</ContactFormTitle>
      <Formik
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <ContactFormBox>
              <ContactFormTextField
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />

              <ContactFormTextField
                label="Number"
                name="number"
                type="tel"
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.number && Boolean(errors.number)}
                helperText={touched.number && errors.number}
              />

              <ContactFormBacButton
                variant="contained"
                type="submit"
                disabled={!values.name || !values.number || isLoading}
              >
                {isLoading && '☎'} Add
              </ContactFormBacButton>
            </ContactFormBox>
          </Form>
        )}
      </Formik>

      <ToastContainer position="top-center" autoClose={5000} />
    </ContactFormWrapper>
    // </ContactFormBackdrop>
  );
};

export default ContactForm;

// const ContactForm = () => {
//   const contacts = useSelector(selectContacts);
//   const isLoading = useSelector(selectIsLoading);
//   const dispatch = useDispatch();

//   const onSubmit = (values, { resetForm }) => {
//     const newContact = {
//       name: values.name,
//       number: values.number,
//     };

//     const isNamePresent = contacts.some(
//       contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
//     );

//     if (isNamePresent) {
//       toast.error(`${newContact.name} is already in contacts `, {
//         theme: 'colored',
//       });
//       resetForm();
//       return;
//     }

//     dispatch(addContact(newContact));

//     resetForm();
//     toast.success('Сontact added successfully', { theme: 'colored' });
//   };

//   return (
//     <div>
//       <Formik
//         initialValues={initialValue}
//         validationSchema={schema}
//         onSubmit={onSubmit}
//       >
//         <FormContainer>
//           <label>
//             <span>Name</span>
//             <Field type="text" name="name" required />
//             <ErrorMessage name="name" />
//           </label>

//           <label>
//             <span>Number</span>
//             <Field type="tel" name="number" required />
//             <ErrorMessage name="number" />
//           </label>
//           <Button variant="contained" type="submit" disabled={isLoading}>
//             {isLoading && '☎'} Add
//           </Button>
//         </FormContainer>
//       </Formik>

//       <ToastContainer position="top-center" autoClose={5000} />
//     </div>
//   );
// };

// export default ContactForm;
