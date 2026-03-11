import styled from '@emotion/styled';
import { Box, Typography, TextField, Button } from '@mui/material';

const LoginFormWrapper = styled(Box)({
  margin: 'auto',
  padding: '16px 32px',

  borderRadius: '4px',
  boxShadow: '0 0 10px rgba(82, 103, 121, 1)',
  backgroundColor: 'rgba(20, 125, 223, 0.5)',
  // transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',

  // '&:hover': {
  //   transform: 'scale(1.03)',
  // },
  // '&:focus': {
  //   transform: 'scale(1.03)',
  // },
});

const LoginFormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 300px;
  margin: auto;
`;

const LoginFormTitle = styled(Typography)`
  font-weight: 600;
  text-align: center;
  color: white;
`;

const LoginFormField = styled(TextField)`
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
    color: black; /* цвет по умолчанию */
  }

  & .MuiInputLabel-root.Mui-focused {
    color: black; /* цвет при фокусе */
    font-size: 1.2rem;
  }
`;

const LoginFormError = styled(Typography)`
  color: red;
  font-size: 20px;
  text-align: center;
`;

const LoginFormButton = styled(Button)`
  border: 2px solid white;
  color: white;
  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.09);
    border-color: white;
  }
`;

export {
  LoginFormWrapper,
  LoginFormBox,
  LoginFormTitle,
  LoginFormField,
  LoginFormError,
  LoginFormButton,
};
