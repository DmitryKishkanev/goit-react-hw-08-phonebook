import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        {/* <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul> */}

        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>

        <ul>
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </header>
      <main>
        {/* В <Outlet /> рендерятся все маршруты - оборачиваем его в Suspense для асинхронной загрузки */}
        <Suspense fallback={<div>LOADING...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
