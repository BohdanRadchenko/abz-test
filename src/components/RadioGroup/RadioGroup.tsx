import React, { PropsWithChildren } from 'react';
import { FormControlLabel, RadioGroup as MuiRadioGroup, Radio as MuiRadio } from "@mui/material";
import { Typography } from "../Typography";

export type TRadioOptions<T> = { value: T, label: string };

interface IRadio<T> {
  options: TRadioOptions<T> [];
  defaultValue?: T;
  name: string;
  title?: string
}

export const RadioGroup = <T, >({ title, name, defaultValue, options }: PropsWithChildren<IRadio<T>>) => {
  return (
    <>
      {!!title && (
        <Typography style={{ marginBottom: "11px" }}>{title}</Typography>
      )}
      <MuiRadioGroup
        defaultValue={defaultValue || options[0].value}
        name={name}
      >
        {!!options.length && options.map(({ value, label }) => (
          <FormControlLabel
            key={label}
            value={value}
            label={label}
            control={
              <MuiRadio
                sx={{
                  color: "#D0CFCF",
                  padding: "3px",
                  margin: "0 5px 0 9px",
                  '&.Mui-checked': {
                    color: "#00BDD3",
                  },
                  '& + .MuiFormControlLabel-label': {
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 400,
                    color: "#000000DE"
                  }
                }}
              />
            }
          />
        ))}
      </MuiRadioGroup>
    </>
  );
};
