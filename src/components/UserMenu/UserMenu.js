import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth';
import { useAuth } from '../../hooks';

import { UserMenuBox, UserMenuButton } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName } = useAuth();
  return (
    <UserMenuBox>
      <p>Welcome, {userName}</p>

      <UserMenuButton
        variant="outlined"
        color="inherit"
        onClick={() => dispatch(logOut())}
        // style={{ margin: 'auto 0' }}
        sx={{
          // textDecoration: 'none',
          // color: 'inherit',
          '&:hover': {
            textDecoration: 'none',
            color: 'inherit',
            backgroundColor: 'rgba(255,255,255,0.1)',
          },
          '&:focus': {
            textDecoration: 'none',
            color: 'inherit',
          },
        }}
      >
        Log out
      </UserMenuButton>
    </UserMenuBox>
  );
};

export default UserMenu;
