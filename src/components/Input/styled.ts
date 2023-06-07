import { styled, TextField } from "@mui/material";

export const CustomInput = styled(TextField)({
  height: "54px",
  margin: 0,
  '& label.Mui-focused': {
    color: '#7E7E7E',
  },
  '& .MuiOutlinedInput-root': {
    '& input[aria-invalid=false] + fieldset': {
      borderColor: '#D0CFCF',
    },
    '& input[aria-invalid=false] + label': {
      borderColor: '#7E7E7E',
    },
    '& input[aria-invalid=false] + label.Mui-focused': {
      borderColor: 'green',
    },
    '& input:invalid + fieldset': {
      borderColor: '#CB3D40',
      borderWidth: 2,
    },
    '& input:invalid + label': {
      color: '#CB3D40',
    }
  }
});
