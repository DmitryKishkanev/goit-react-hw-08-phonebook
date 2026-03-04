import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';

const AppBar = () => {
  return (
    <header>
      <div>
        <Navigation />
        <UserMenu />
        <AuthNav />
      </div>
    </header>
  );
};

export default AppBar;
