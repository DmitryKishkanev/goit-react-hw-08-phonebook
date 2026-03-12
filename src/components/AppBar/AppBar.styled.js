import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const AppBarLogo = styled(Typography)`
  margin: 0 0 0 50px;
  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  text-align: left;
  color: white;

  &:hover,
  &:focus {
    transform: scale(1.09);
    color: rgb(82, 38, 0);
  }
`;

export { AppBarLogo };
