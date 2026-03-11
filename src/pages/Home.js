import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks';
import { Box, Button } from '@mui/material';

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? (
        <Box>
          <h1>Phonebook welcome page</h1>
        </Box>
      ) : (
        <Box
          sx={{
            minHeight: 'calc(100vh - 85.98px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            component={NavLink}
            to="/login"
            variant="outlined"
            color="inherit"
            sx={{
              width: '92px',
              marginLeft: '1000px',
              border: '2px solid black',
              transition:
                'transform 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',

              '&:hover': {
                transform: 'scale(1.07)',
                color: 'rgb(255, 129, 56)',
                borderColor: 'rgb(255, 129, 56)',
              },
              '&:focus': {
                transform: 'scale(1.07)',
                color: 'white',
                borderColor: 'rgb(255, 129, 56)',
              },
            }}
          >
            Log in
          </Button>

          <Button
            component={NavLink}
            to="/register"
            variant="outlined"
            color="inherit"
            sx={{
              width: '92px',
              marginLeft: '1000px',
              border: '2px solid black',
              transition:
                'transform 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',

              '&:hover': {
                transform: 'scale(1.07)',
                color: 'rgb(255, 129, 56)',
                borderColor: 'rgb(255, 129, 56)',
              },
              '&:focus': {
                transform: 'scale(1.07)',
                color: 'white',
                borderColor: 'rgb(255, 129, 56)',
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      )}
    </>
  );
};

export default Home;
