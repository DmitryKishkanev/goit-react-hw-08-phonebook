import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Contacts = () => {
  const location = useLocation();

  return (
    <>
      <ul>
        <li>
          <Link to={'newContactPage'} state={{ from: location }}>
            ADD NEW CONTACT
          </Link>
        </li>
        <li>
          <Link to={'findContactPage'} state={{ from: location }}>
            Find contact by name
          </Link>
        </li>
      </ul>

      {/* В <Outlet /> рендерятся вложенные маршруты - оборачиваем его в Suspense для асинхронной загрузки */}
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        {/* Указывает местоположение в разметке */}
        <Outlet />
      </Suspense>
    </>
  );
};

export default Contacts;
