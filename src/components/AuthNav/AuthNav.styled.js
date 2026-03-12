import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

const AuthNavBox = styled(Box)`
  display: flex;
  gap: 16px;
`;

const AuthNavButton = styled(Button)`
  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.09);
    color: rgb(82, 38, 0);
    border-color: rgb(82, 38, 0);
  }

  &.active {
    color: rgb(82, 38, 0);
    border: 2px solid rgb(82, 38, 0);
  }
`;

export { AuthNavBox, AuthNavButton };
