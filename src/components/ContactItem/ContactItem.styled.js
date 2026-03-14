import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';

const ContactEl = styled.li`
  list-style: none;
`;

const ContactItemBox = styled(Box)`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  cursor: pointer;

  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.03);
  }

  &:hover > p,
  &:focus > p {
    color: rgb(82, 38, 0);
    border-color: rgb(255, 129, 56);
  }
`;

const ContactItemContent = styled(Typography)`
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 18px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: white;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const ContactItemButtonsBox = styled(Box)`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const ContactItemButton = styled(Button)`
  color: white;
  border-color: white;

  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.09);
    border-color: rgb(82, 38, 0);
    color: rgb(82, 38, 0);
  }
`;

export {
  ContactEl,
  ContactItemBox,
  ContactItemContent,
  ContactItemButtonsBox,
  ContactItemButton,
};
