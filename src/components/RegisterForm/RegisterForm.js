import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth';
import {
  RegistrationFormWrapper,
  RegistrationFormBox,
  RegistrationTitle,
  RegistrationFormField,
  RegistrationFormError,
  RegistrationFormButton,
} from './RegisterForm.styled';

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        }),
      ).unwrap();

      form.reset();
      navigate('/contacts', { replace: true });
    } catch (error) {
      setErrorMessage(error.message || 'Register failed');
    }
  };

  return (
    <RegistrationFormWrapper>
      <RegistrationFormBox component="form" onSubmit={handleSubmit}>
        <RegistrationTitle variant="h5">Registration</RegistrationTitle>

        <RegistrationFormField
          label="Name"
          type="text"
          name="name"
          required
          fullWidth
        />

        <RegistrationFormField
          label="Email"
          type="email"
          name="email"
          required
          fullWidth
        />

        <RegistrationFormField
          label="Password"
          type="password"
          name="password"
          required
          fullWidth
        />

        {errorMessage && (
          <RegistrationFormError variant="body2">
            {`${errorMessage} - try again`}
          </RegistrationFormError>
        )}

        <RegistrationFormButton
          variant="outlined"
          type="submit"
          sx={{ alignSelf: 'center', width: '100px' }}
        >
          Sign Up
        </RegistrationFormButton>
      </RegistrationFormBox>
    </RegistrationFormWrapper>
  );
};

export default RegisterForm;
