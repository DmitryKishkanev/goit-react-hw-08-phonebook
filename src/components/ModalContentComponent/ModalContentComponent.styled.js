import styled from '@emotion/styled';
import { DialogTitle, DialogContent, TextField, Button } from '@mui/material';

const ModalTitle = styled(DialogTitle)`
  text-align: center;
`;

const ModalContent = styled(DialogContent)`
  padding: 0 24px 10px;
`;

const ModalTextField = styled(TextField)`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

const ModalButton = styled(Button)`
  width: 87px;
  border-color: #1976d2;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.09);
    border-color: #1976d2;
  }
`;

export { ModalTitle, ModalContent, ModalTextField, ModalButton };
