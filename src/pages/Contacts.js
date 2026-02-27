import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <ul>
      <li>
        <Link to={'newContact'}>ADD NEW CONTACT</Link>
      </li>
      <li>
        <Link to={'findContact'}>Find contact by name</Link>
      </li>
    </ul>
  );
};

export default Contacts;
