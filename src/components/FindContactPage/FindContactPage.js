import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import BackLink from 'components/BackLink';

export const FindContactPage = () => {
  const location = useLocation();
  // Сохраняем URL откуда мы пришли для возврата назад. Или вернуться на '/contacts'
  // const backLinkLokatonRef = location.state?.from ?? '/contacts';
  // сохраняем в useRef() на случай если появятся пути глубже
  const backLinkLokatonRef = useRef(location.state?.from ?? '/contacts');

  return (
    <div>
      <BackLink to={backLinkLokatonRef.current}>Back</BackLink>
      <Filter />
      <ContactList />
    </div>
  );
};
