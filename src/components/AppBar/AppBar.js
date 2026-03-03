import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';

const AppBar = () => {
  return (
    <heder>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </heder>
  );
};

export default AppBar;
