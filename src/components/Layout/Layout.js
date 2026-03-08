import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBarComponent from 'components/AppBar';

const Layout = () => {
  return (
    <div>
      <AppBarComponent />

      {/* В <Outlet /> рендерятся все маршруты - оборачиваем его в Suspense для асинхронной загрузки */}
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
