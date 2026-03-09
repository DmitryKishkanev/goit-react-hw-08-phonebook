// import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { NavigationBox, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationBox>
      <StyledNavLink to="/">Home</StyledNavLink>

      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </NavigationBox>
  );
};

export default Navigation;
