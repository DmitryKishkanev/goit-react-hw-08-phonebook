import styled from '@emotion/styled';
import { Box, Typography, TextField, Button } from '@mui/material';

const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 32px;
  border: 1px solid white;
  border-radius: 4px;
  background-color: rgba(161, 107, 63, 0.9);
`;

const ContactFormTitle = styled(Typography)`
  text-align: center;
  color: white;
`;

const ContactFormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 300px;
`;

const ContactFormTextField = styled(TextField)`
  border-radius: 4px;
  background-color: white;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  & .MuiOutlinedInput-root {
    & fieldset {
      border: none;
    }
    &:hover fieldset {
      border: none;
    }
    &.Mui-focused fieldset {
      border: none;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
  &:focus {
    transform: scale(1.05);
  }

  /* стили для label */
  & .MuiInputLabel-root {
    color: rgba(0, 0, 0, 0.5); /* цвет по умолчанию */
    font-size: 1.3rem;
  }

  & .MuiInputLabel-root.Mui-focused {
    color: rgba(0, 0, 0, 0.5); /* цвет при фокусе */
    font-size: 1.5rem;
  }
`;

const ContactFormBacButton = styled(Button)`
  margin: 0 auto;
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
  ContactFormWrapper,
  ContactFormTitle,
  ContactFormBox,
  ContactFormTextField,
  ContactFormBacButton,
};
