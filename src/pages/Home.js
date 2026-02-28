import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    // Рендерим по условию в зависимости от isLoggedIn
    <ul>
      <li>
        <NavLink to="/login">
          <button>Log in</button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/register">
          <button>Register</button>
        </NavLink>
      </li>
    </ul>
  );
};

export default Home;
