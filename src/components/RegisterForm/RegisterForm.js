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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await dispatch(
        register({
          name,
          email,
          password,
        }),
      ).unwrap();

      form.reset();
      setName('');
      setEmail('');
      setPassword('');
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
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <RegistrationFormField
          label="Email"
          type="email"
          name="email"
          required
          fullWidth
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <RegistrationFormField
          label="Password"
          type="password"
          name="password"
          required
          fullWidth
          value={password}
          onChange={e => setPassword(e.target.value)}
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
          disabled={!name || !email || !password}
        >
          Sign Up
        </RegistrationFormButton>
      </RegistrationFormBox>
    </RegistrationFormWrapper>
  );
};

export default RegisterForm;
