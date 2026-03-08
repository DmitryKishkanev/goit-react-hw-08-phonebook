import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth';
import { Button, TextField, Box, Typography } from '@mui/material';

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
        Registration
      </Typography>

      <TextField label="Name" type="text" name="name" required fullWidth />

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
        Sign Up
      </Button>
    </Box>
  );
};

export default RegisterForm;
