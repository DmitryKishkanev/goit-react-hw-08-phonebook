import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ContactForm from 'components/ContactForm';
import BackLink from 'components/BackLink';

const NewContactPage = () => {
  const location = useLocation();
  // сохраняем в useRef() на случай если появятся пути глубже
  const backLinkLokatonRef = useRef(location.state?.from ?? '/contacts');

  return (
    <>
      <BackLink to={backLinkLokatonRef.current}>Back</BackLink>
      <ContactForm />
    </>
  );
};

export default NewContactPage;
