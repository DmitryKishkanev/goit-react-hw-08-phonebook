import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth';
import { useAuth } from '../../hooks';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName } = useAuth();
  return (
    <div>
      <p>Welcome, {userName}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
