import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/auth';
import { Button, TextField, Box, Typography } from '@mui/material';

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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 300,
        mx: 'auto',
        mt: 4,
      }}
    >
      <Typography variant="h5" align="center">
        Log In
      </Typography>

      <TextField label="Email" type="email" name="email" required fullWidth />

      <TextField
        label="Password"
        type="password"
        name="password"
        required
        fullWidth
      />

      {errorMessage && (
        <Typography color="error" variant="body2">
          {errorMessage}
        </Typography>
      )}

      <Button
        variant="contained"
        type="submit"
        sx={{ alignSelf: 'center', width: '100px' }}
      >
        Log In
      </Button>
    </Box>
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
