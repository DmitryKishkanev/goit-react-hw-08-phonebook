import { NavLink } from 'react-router-dom';
import { AuthNavBox, AuthNavButton } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthNavBox>
      <AuthNavButton
        component={NavLink}
        to="/login"
        variant="outlined"
        color="inherit"
      >
        Log in
      </AuthNavButton>

      <AuthNavButton
        component={NavLink}
        to="/register"
        variant="contained"
        color="secondary"
      >
        Sign Up
      </AuthNavButton>
    </AuthNavBox>
  );
};

export default AuthNav;
