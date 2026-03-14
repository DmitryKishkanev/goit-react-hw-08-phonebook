import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const NavigationBox = styled.nav`
  display: flex;
  gap: 30px;
`;

const StyledNavLink = styled(NavLink)`
  color: white;

  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    text-decoration: none;
    transform: scale(1.2);
    color: white;
  }

  &.active {
    text-decoration: none;
    color: rgb(124, 58, 0);
  }
`;

export { NavigationBox, StyledNavLink };
