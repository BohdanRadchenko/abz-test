import React, { FC } from 'react';
import { FieldProps } from "formik";
import { TextFieldProps } from "@mui/material";
import { CustomInput } from "./styled";

export const Input: FC<FieldProps & TextFieldProps> = ({ field, ...rest }) => {
  return (
    <CustomInput
      variant="outlined"
      fullWidth
      {...field}
      {...rest}
    />
  );
};
