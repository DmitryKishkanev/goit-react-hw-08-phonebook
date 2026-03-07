import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import BackLink from 'components/BackLink';
import { fetchContacts } from '../../redux/phonebook';
import { useDispatch } from 'react-redux';

export const FindContactPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  // Сохраняем URL откуда мы пришли для возврата назад. Или вернуться на '/contacts'
  // const backLinkLokatonRef = location.state?.from ?? '/contacts';
  // сохраняем в useRef() на случай если появятся пути глубже
  const backLinkLokatonRef = useRef(location.state?.from ?? '/contacts');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <BackLink to={backLinkLokatonRef.current}>Back</BackLink>
      <Filter />
      <ContactList />
    </div>
  );
};
