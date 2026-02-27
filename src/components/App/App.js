import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';
// import ContactList from 'components/ContactList';
// import { Container } from 'components/App/App.styled';
import { fetchContacts } from '../../redux/phonebook';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <nav>
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
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />}>
          <Route path="newContact" element={<div>New contact</div>} />
          <Route path="findContact" element={<div>Find contact by name</div>} />
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
