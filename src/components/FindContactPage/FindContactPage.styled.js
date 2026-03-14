import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';

const FindContactPageBackdrop = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 85.98px);
  background-color: rgba(0, 0, 0, 0.5);
`;

const FindContactPageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
`;

const FindContactPageBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 640px;

  padding: 12px 32px;
  border: 1px solid white;
  border-radius: 4px;
  background-color: rgba(161, 107, 63, 0.9);
`;

const FindContactPageTitle = styled(Typography)`
  text-align: center;
  color: white;
`;

const FindContactPageButton = styled(Button)`
  border-color: rgb(161, 107, 63);
  color: white;
  background-color: rgba(161, 107, 63, 0.7);
  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.09);
    border-color: white;
    color: rgb(82, 38, 0);
  }
`;

export {
  FindContactPageBackdrop,
  FindContactPageWrapper,
  FindContactPageBox,
  FindContactPageTitle,
  FindContactPageButton,
};
