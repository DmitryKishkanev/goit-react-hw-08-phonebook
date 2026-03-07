import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks';

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? (
        <div>
          <h1>Phonebook welcome page</h1>
        </div>
      ) : (
        <div>
          <NavLink to="/login">
            <button>Log in</button>
          </NavLink>

          <NavLink to="/register">
            <button>Register</button>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Home;
