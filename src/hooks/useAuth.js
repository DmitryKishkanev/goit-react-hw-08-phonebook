import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserName,
  selectIsRefreshing,
} from '../redux/auth/auth-selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    userName: useSelector(selectUserName),
    isRefreshing: useSelector(selectIsRefreshing),
  };
};
