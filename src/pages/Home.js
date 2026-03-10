import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks';
import { Box, Button } from '@mui/material';
import GuestBg from '../assets/PhonebookImageALL.jpg';
import LoggedInBg from '../assets/background-image.jpg';

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? (
        <div
          style={{
            backgroundImage: `url(${LoggedInBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: 'calc(100vh - 85.98px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>Phonebook welcome page</h1>
        </div>
      ) : (
        <Box
          sx={{
            minHeight: 'calc(100vh - 85.98px)',

            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${GuestBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Button
            component={NavLink}
            to="/login"
            variant="outlined"
            color="inherit"
            sx={{ width: '90px', marginLeft: '1000px' }}
          >
            Log in
          </Button>

          <Button
            component={NavLink}
            to="/register"
            variant="outlined"
            color="inherit"
            sx={{ width: '90px', marginLeft: '1000px' }}
          >
            Sign Up
          </Button>
        </Box>
      )}
    </>
  );
};

export default Home;
