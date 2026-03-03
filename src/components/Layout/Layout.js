import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';

const Layout = () => {
  return (
    <div>
      <AppBar />

      {/* В <Outlet /> рендерятся все маршруты - оборачиваем его в Suspense для асинхронной загрузки */}
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
