import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { useAuth } from '../../hooks';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';

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
            <Typography
              variant="h4"
              sx={{
                textAlign: 'left',
                margin: '0 0 0 50px',
              }}
            >
              ☎Phonebook
            </Typography>
            <Navigation />
          </Box>

          <Box>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
        </Toolbar>
      </Container>
    </AppBar>
    // <header>
    //   <Navigation />
    //   {isLoggedIn ? <UserMenu /> : <AuthNav />}
    // </header>
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
