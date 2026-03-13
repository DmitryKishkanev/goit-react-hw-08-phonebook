import styled from '@emotion/styled';
import { Box, Typography, TextField, Button } from '@mui/material';

// const ContactFormBackdrop = styled(Box)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   min-height: calc(100vh - 85.98px);
//   background-color: rgba(0, 0, 0, 0.5);
// `;

const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 32px;
  border: 1px solid white;
  border-radius: 4px;
  /* box-shadow: 0 0 10px rgba(82, 103, 121, 1); */
  /* background-color: rgba(20, 125, 223, 0.5); */
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
    color: black; /* цвет при фокусе */
    font-size: 1.5rem;
  }
`;

const ContactFormBacButton = styled(Button)`
  margin: 0 auto;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.09);
  }
`;

export {
  // ContactFormBackdrop,
  ContactFormWrapper,
  ContactFormTitle,
  ContactFormBox,
  ContactFormTextField,
  ContactFormBacButton,
};
