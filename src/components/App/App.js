import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
// import { Route, Routes, NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';
// import ContactList from 'components/ContactList';
// import { Container } from 'components/App/App.styled';
import { fetchContacts } from '../../redux/phonebook';

// Layout - оставляем так, без асинхронной загрузки, без lazy()
import Layout from 'components/Layout';

const Home = lazy(() => import('../../pages/Home'));
const Contacts = lazy(() => import('../../pages/Contacts'));

// Пример именованного импорта с асинхронной загрузкой
const NewContactPage = lazy(() =>
  import('../NewContactPage').then(module => ({
    ...module,
    default: module.NewContactPage,
  })),
);
// Пример именованного импорта с асинхронной загрузкой
const FindContactPage = lazy(() =>
  import('../FindContactPage').then(module => ({
    ...module,
    default: module.FindContactPage,
  })),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {/* <nav>
        <header>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </header>
      </nav> */}
      <Routes>
        {/*Вложенным маршрутам не нужен слеш в начале */}
        <Route path="/" element={<Layout />}>
          {/* Индексный маршрут не может иметь вложенных маршрутов */}
          <Route index element={<Home />} />
          <Route path="login" element={<div>login page</div>} />
          <Route path="register" element={<div>register page</div>} />
          <Route path="contacts" element={<Contacts />}>
            <Route path="newContactPage" element={<NewContactPage />} />
            <Route path="findContactPage" element={<FindContactPage />} />
          </Route>
        </Route>

        {/* <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/:contactsId" element={<div>New contact</div>} /> */}
      </Routes>

      {/* <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container> */}
    </div>
  );
}
