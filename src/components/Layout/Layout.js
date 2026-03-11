import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks';
import AppBarComponent from 'components/AppBar';
import { BackgroundWrapper } from './Layout.styled';

const Layout = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return (
    <BackgroundWrapper isLoggedIn={isLoggedIn} pathname={location.pathname}>
      <AppBarComponent />

      {/* В <Outlet /> рендерятся все маршруты - оборачиваем его в Suspense для асинхронной загрузки */}
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </BackgroundWrapper>
  );
};

export default Layout;
