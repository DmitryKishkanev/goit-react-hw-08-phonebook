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

      {/* Указывает местоположение в разметке */}
      <Outlet />
    </>
  );
};

export default Contacts;
