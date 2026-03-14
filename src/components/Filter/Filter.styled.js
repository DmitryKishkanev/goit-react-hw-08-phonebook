import styled from '@emotion/styled';
import { TextField } from '@mui/material';

const FilterTextField = styled(TextField)`
  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    boorder-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  & .MuiOutlinedInput-root {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    color: rgb(82, 38, 0); // цвет текста внутри поля

    & fieldset {
      border-color: rgb(82, 38, 0);
    }
    &:hover fieldset {
      border-color: rgb(82, 38, 0);
    }
    &.Mui-focused fieldset {
      border-color: rgb(82, 38, 0);
    }
  }

  &:hover {
    transform: scale(1.03);
  }
  &:focus {
    transform: scale(1.03);
  }

  & .MuiInputLabel-root {
    color: rgba(82, 38, 0, 0.5); /* цвет по умолчанию */
  }

  & .MuiInputLabel-root.Mui-focused {
    color: rgba(82, 38, 0, 0.5); /* цвет при фокусе */
    font-size: 1.2rem;
  }
`;

export { FilterTextField };
