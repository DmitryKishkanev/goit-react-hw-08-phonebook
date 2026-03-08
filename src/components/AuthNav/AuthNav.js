import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button
        component={NavLink}
        to="/login"
        variant="outlined"
        color="inherit"
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          '&:hover': {
            textDecoration: 'none',
            color: 'inherit',
            backgroundColor: 'rgba(255,255,255,0.1)',
          },
          '&:focus': {
            textDecoration: 'none',
            color: 'inherit',
          },
          '&.active': {
            border: 'solid 2px white',
          },
        }}
      >
        Log in
      </Button>

      <Button
        component={NavLink}
        to="/register"
        variant="contained"
        color="secondary"
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          '&:hover': {
            textDecoration: 'none',
            color: 'inherit',
            // backgroundColor: 'rgba(255,255,255,0.1)',
          },
          '&:focus': {
            textDecoration: 'none',
            color: 'inherit',
          },
          '&.active': {
            border: 'solid 2px white',
            // borderColor: 'white',
          },
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default AuthNav;
