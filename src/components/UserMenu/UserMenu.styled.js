import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

const UserMenuBox = styled(Box)`
  display: flex;
  gap: 10px;
`;

const UserMenuButton = styled(Button)`
  margin: auto 0;

  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.09);
    background-color: rgba(255, 255, 255, 0.1);
    color: rgb(82, 38, 0);
    border-color: rgb(82, 38, 0);
  }
`;

export { UserMenuBox, UserMenuButton };
