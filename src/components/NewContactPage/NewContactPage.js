import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ContactForm from 'components/ContactForm';
import BackLink from 'components/BackLink';
import { ContactPageBackdrop, ContactPageBox } from './NewContactPage.styled';
import { Button } from '@mui/material';

export const NewContactPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Сохраняем URL откуда мы пришли для возврата назад. Или вернуться на '/contacts'
  // const backLinkLokatonRef = location.state?.from ?? '/contacts';
  // сохраняем в useRef() на случай если появятся пути глубже
  const backLinkLokatonRef = useRef(location.state?.from ?? '/contacts');

  const handeClose = () => {
    navigate('/contacts');
  };

  return (
    <ContactPageBackdrop>
      <ContactPageBox>
        <BackLink to={backLinkLokatonRef.current}>Back</BackLink>
        <ContactForm />

        <Button type="button" onClick={handeClose}>
          Close
        </Button>
      </ContactPageBox>
    </ContactPageBackdrop>
  );
};
