import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        }),
      ).unwrap();

      form.reset();
      navigate('/contacts', { replace: true });
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
        />

        <LoginFormField
          label="Password"
          type="password"
          name="password"
          required
          fullWidth
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
        >
          Log In
        </LoginFormButton>
      </LoginFormBox>
    </LoginFormWrapper>
  );
};

export default LoginForm;

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const form = e.currentTarget;

//     try {
//       await dispatch(
//         logIn({
//           email: form.elements.email.value,
//           password: form.elements.password.value,
//         }),
//       ).unwrap();

//       form.reset();
//       navigate('/contacts', { replace: true });
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Email
//         <input type="email" name="email" />
//       </label>

//       <label>
//         Password
//         <input type="password" name="password" />
//       </label>

//       {/* <button type="submit">Log In</button> */}
//       <Button variant="contained" type="submit">
//         Log In
//       </Button>
//     </form>
//   );
// };

// export default LoginForm;
