import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { FieldProps } from "formik";
import "./inputUpload.scss";

interface IInputUpload {
  label?: string;
  accept?: string;
  minWidth?: number;
  maxSize?: number;
  error?: boolean,
  helperText?: string,
}

export const InputUpload: FC<FieldProps & IInputUpload> = ({
                                                             field: { name, onChange, value, ...field },
                                                             form: { setFieldValue },
                                                             label = "Upload your photo",
                                                             accept = "image/*",
                                                             error,
                                                             helperText,
                                                           }) => {
  const [title, setTitle] = useState(label);

  const handleLoad = useCallback((e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if ( !target.files?.length ) return;
    const file = target.files[0];
    setFieldValue(name, file, true);
    setTitle(file.name);
  }, [setFieldValue, name, setTitle])

  return (
    <>
      <label
        className="inputUpload"
        htmlFor="inputUploadFile"
      >
        <span className={`inputUpload__button ${!!error && "error"}`}>Upload</span>
        <span className={`inputUpload__title ${!!error && "error"} ${title === label && "placeholder"}`}>{title}</span>
        <input
          onChange={handleLoad}
          title=" "
          className="inputUpload__file"
          type="file"
          id="inputUploadFile"
          accept={accept}
          {...field}
        />
        <span className={`inputUpload__helper ${!!error && "error"}`}>{helperText}</span>
      </label>
    </>
  );
};
