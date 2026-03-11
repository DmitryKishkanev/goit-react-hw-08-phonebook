import styled from '@emotion/styled';
import GuestBg from '../../assets/guestBg.jpg';
import LoggedInBg from '../../assets/loggedInBg.jpg';
import AuthBg from '../../assets/authBg.jpg';

const BackgroundWrapper = styled.div(({ isLoggedIn, pathname }) => {
  let background;
  if (isLoggedIn) {
    background = LoggedInBg;
  } else if (pathname === '/login' || pathname === '/register') {
    background = AuthBg;
  } else {
    background = GuestBg;
  }

  return {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPositionY: 'center',
    backgroundRepeat: 'no-repeat',
  };
});

export { BackgroundWrapper };
