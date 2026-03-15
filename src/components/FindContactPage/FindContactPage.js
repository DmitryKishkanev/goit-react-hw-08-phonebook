import { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import BackLink from 'components/BackLink';
import { fetchContacts } from '../../redux/phonebook';
import { useDispatch } from 'react-redux';
import {
  FindContactPageBackdrop,
  FindContactPageWrapper,
  FindContactPageBox,
  FindContactPageTitle,
  FindContactPageButton,
} from './FindContactPage.styled';

export const FindContactPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Сохраняем URL откуда мы пришли для возврата назад. Или вернуться на '/contacts'
  // const backLinkLokatonRef = location.state?.from ?? '/contacts';
  // сохраняем в useRef() на случай если появятся пути глубже
  const backLinkLokatonRef = useRef(location.state?.from ?? '/contacts');

  const handeClose = () => {
    navigate('/contacts');
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <FindContactPageBackdrop>
      <FindContactPageWrapper>
        <BackLink to={backLinkLokatonRef.current}>Back</BackLink>
        <FindContactPageBox>
          <FindContactPageTitle variant="h5">Contacts</FindContactPageTitle>
          <Filter />
          <ContactList />
        </FindContactPageBox>

        <FindContactPageButton
          type="button"
          onClick={handeClose}
          variant="outlined"
        >
          close
        </FindContactPageButton>
      </FindContactPageWrapper>
    </FindContactPageBackdrop>
  );
};
