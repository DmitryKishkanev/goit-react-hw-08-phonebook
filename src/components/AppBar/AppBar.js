import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { useAuth } from '../../hooks';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { AppBarLogo } from './AppBar.styled';

const AppBarComponent = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth={false}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 24px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <AppBarLogo component={NavLink} to="/" variant="h4">
              ☎Phonebook
            </AppBarLogo>
            <Navigation />
          </Box>

          <Box>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;

// const AppBar = () => {
//   const { isLoggedIn } = useAuth();
//   return (
//     <header>
//       <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />}
//     </header>
//   );
// };

// export default AppBar;
