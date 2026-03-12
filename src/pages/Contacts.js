import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Contacts = () => {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          width: '400px',
          minHeight: 'calc(100vh - 85.98px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center',
          pt: '20px',
          backgroundColor: 'rgb(161, 107, 63)',
        }}
      >
        <Typography variant="h4" sx={{ color: 'rgb(82, 38, 0)' }}>
          Your contacts
        </Typography>
        <Button
          component={NavLink}
          to="newContactPage"
          state={{ from: location }}
          variant="outlined"
          sx={{
            width: '201px',
            // border: '2px solid black',
            borderColor: 'white',
            color: 'white',
            transition:
              'transform 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',

            '&:hover': {
              transform: 'scale(1.07)',
              color: 'rgb(82, 38, 0)',
              borderColor: 'rgb(82, 38, 0)',
            },
            '&:focus': {
              transform: 'scale(1.07)',
              color: 'rgb(82, 38, 0)',
              borderColor: 'rgb(82, 38, 0)',
            },
            '&.active': {
              color: 'rgb(255, 129, 56)',
              borderColor: 'rgb(255, 129, 56)',
            },
          }}
        >
          ADD NEW CONTACT
        </Button>

        <Button
          component={NavLink}
          to="findContactPage"
          state={{ from: location }}
          variant="outlined"
          sx={{
            width: '201px',
            borderColor: 'white',
            color: 'white',
            transition:
              'transform 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',

            '&:hover': {
              transform: 'scale(1.07)',
              color: 'rgb(82, 38, 0)',
              borderColor: 'rgb(82, 38, 0)',
            },
            '&:focus': {
              transform: 'scale(1.07)',
              color: 'rgb(82, 38, 0)',
              borderColor: 'rgb(82, 38, 0)',
            },
            '&.active': {
              color: 'rgb(255, 129, 56)',
              borderColor: 'rgb(255, 129, 56)',
            },
          }}
        >
          Find contact by name
        </Button>
      </Box>

      {/* В <Outlet /> рендерятся вложенные маршруты - оборачиваем его в Suspense для асинхронной загрузки */}
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            minHeight: 'calc(100vh - 85.98px)',
          }}
        >
          {/* Указывает местоположение в разметке */}
          <Outlet />
        </Box>
      </Suspense>
    </Box>
  );
};

export default Contacts;
