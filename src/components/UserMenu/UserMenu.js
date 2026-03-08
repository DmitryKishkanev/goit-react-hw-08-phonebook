import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth';
import { useAuth } from '../../hooks';
import Button from '@mui/material/Button';
import { UserMenuBox } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName } = useAuth();
  return (
    <UserMenuBox>
      <p>Welcome, {userName}</p>

      <Button
        variant="outlined"
        color="secondary"
        onClick={() => dispatch(logOut())}
        style={{ margin: 'auto 0' }}
      >
        Log out
      </Button>
    </UserMenuBox>
  );
};

export default UserMenu;
