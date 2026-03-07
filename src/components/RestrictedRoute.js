import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return isLoggedIn ? (
    <Navigate to={location.state ? location.state : redirectTo} />
  ) : (
    Component
  );
};
