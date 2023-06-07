import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Username should contain 2-60 characters")
    .max(60, "Username should contain 2-60 characters"),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required!'),
  phone: Yup.string()
    .required('Phone is required!')
    .matches(
      /^[\+]{0,1}380([0-9]{9})$/,
      "User phone number. Number should start with code of Ukraine +380"
    ),
  photo: Yup.mixed()
    .required("Photo required!")
    .test("fileSize", "The file is too large", (value) => {
      if ( !value ) return true;
      const file = value as File;
      return file.size < 5242880;
    }),
});
