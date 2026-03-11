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
          transition:
            'transform 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1)',

          '&:hover': {
            textDecoration: 'none',
            transform: 'scale(1.07)',
            color: 'inherit',
            backgroundColor: 'rgba(255,255,255,0.1)',
          },
          '&:focus': {
            textDecoration: 'none',
            transform: 'scale(1.07)',
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
          transition:
            'transform 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1)',

          '&:hover': {
            textDecoration: 'none',
            transform: 'scale(1.07)',
            color: 'inherit',
            // backgroundColor: 'rgba(255,255,255,0.1)',
          },
          '&:focus': {
            textDecoration: 'none',
            transform: 'scale(1.07)',
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
