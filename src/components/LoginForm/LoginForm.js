import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/auth';
import {
  LoginFormWrapper,
  LoginFormBox,
  LoginFormTitle,
  LoginFormField,
  LoginFormError,
  LoginFormButton,
} from './LoginForm.styled';

const LoginForm = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await dispatch(
        logIn({
          email,
          password,
        }),
      ).unwrap();

      form.reset();
      setEmail('');
      setPassword('');
      // navigate('/contacts', { replace: true });
    } catch (error) {
      setErrorMessage(error.message || 'Login failed');
    }
  };

  return (
    <LoginFormWrapper>
      <LoginFormBox component="form" onSubmit={handleSubmit}>
        <LoginFormTitle variant="h5">Log In</LoginFormTitle>

        <LoginFormField
          label="Email"
          type="email"
          name="email"
          required
          fullWidth
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <LoginFormField
          label="Password"
          type="password"
          name="password"
          required
          fullWidth
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {errorMessage && (
          <LoginFormError color="error" variant="body2">
            {`${errorMessage} - try again`}
          </LoginFormError>
        )}

        <LoginFormButton
          variant="outlined"
          type="submit"
          sx={{ alignSelf: 'center', width: '100px' }}
          disabled={!email || !password}
        >
          Log In
        </LoginFormButton>
      </LoginFormBox>
    </LoginFormWrapper>
  );
};

export default LoginForm;
