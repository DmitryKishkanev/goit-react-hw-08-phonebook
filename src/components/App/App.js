import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
// import { Route, Routes, NavLink } from 'react-router-dom';
import { Route, Routes, Navigate } from 'react-router-dom';
// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';
// import ContactList from 'components/ContactList';
// import { Container } from 'components/App/App.styled';
// import { fetchContacts } from '../../redux/phonebook';
import { refreshCurrentUser } from '../../redux/auth';
import { useAuth } from '../../hooks';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';

// Layout - оставляем так, без асинхронной загрузки, без lazy()
import Layout from 'components/Layout';

const Home = lazy(() => import('../../pages/Home'));
const Contacts = lazy(() => import('../../pages/Contacts'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));

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
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
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
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          >
            <Route
              path="newContactPage"
              element={
                <PrivateRoute>
                  <NewContactPage />
                </PrivateRoute>
              }
            />
            <Route
              path="findContactPage"
              element={
                <PrivateRoute>
                  <FindContactPage />
                </PrivateRoute>
              }
            />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
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
