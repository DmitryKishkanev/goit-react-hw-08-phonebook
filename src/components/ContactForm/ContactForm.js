import { Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { FormContainer } from 'components/ContactForm/ContactForm.styled';
import {
  addContact,
  selectContacts,
  selectIsLoading,
} from '../../redux/phonebook';

const schema = object({
  name: string().required(),
  phone: string().min(7).max(12).required(),
});

const initialValue = {
  name: '',
  phone: '',
};

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      phone: values.phone,
    };

    const isNamePresent = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (isNamePresent) {
      alert(`"${newContact.name}" is already in contacts `);
      return;
    }

    dispatch(addContact(newContact));

    resetForm();
  };

  return (
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
          <Field type="tel" name="phone" required />
          <ErrorMessage name="phone" />
        </label>

        <button
          type="submit"
          disabled={isLoading}
          className="phonebook__button"
        >
          {isLoading && '☎'} Добавить
        </button>
      </FormContainer>
    </Formik>
  );
};

export default ContactForm;
