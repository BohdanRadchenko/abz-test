import React, { useCallback, useEffect, useMemo } from 'react';
import { Form, Formik, Field, FormikValues } from "formik";
import { useDispatch, useSelector } from "stores/hooks";
import { handleUserPositionsGet } from "stores/positions/positionsOperations";
import { positionOptionsDto } from "dto/positionOptionsDto";
import { Button, Input, InputUpload, Loader, RadioGroup } from "components";
import { signupSchema } from "./signupSchema";
import { handleUserRegisterPost } from "../../stores/user/userOperations";

export const RegisterForm = () => {
  const { loading, positions } = useSelector(({ positions }) => positions);
  const dispatch = useDispatch();

  const initialValues = useMemo(() => ( {
    name: "",
    email: "",
    phone: "",
    position_id: positions[0]?.id || 1,
    photo: "",
  } ), [positions])

  const handleSubmit = useCallback((values: FormikValues) => {
    const formData = new FormData();
    Object
      .entries(values)
      .map(([k, v]) => {
        if ( k === "position" ) {
          v = v.toString();
        }
        return [k, v] as [string, string] | [string, File];
      })
      .forEach(([k, v]) => {
        formData.append(k, v);
      })

    dispatch(handleUserRegisterPost(formData))
  }, [dispatch])

  useEffect(() => {
    dispatch(handleUserPositionsGet());
  }, [])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="register__form">
          <div className="register__form__input-wrapper">
            <Field
              name="name"
              label="Name"
              error={touched.name && !!errors.name}
              helperText={errors.name}
              component={Input}
            />
          </div>

          <div className="register__form__input-wrapper">
            <Field
              name="email"
              label="Email"
              error={touched.email && !!errors.email}
              helperText={errors.email}
              component={Input}
            />
          </div>


          <div className="register__form__input-wrapper phone">
            <Field
              name="phone"
              label="Phone"
              error={touched.phone && !!errors.phone}
              helperText={errors.phone || "+38 (XXX) XXX-XX-XX"}
              component={Input}
            />
          </div>

          {loading && <Loader/>}

          <div className="register__form__input-wrapper position">
            {!loading && !!positions.length && (
              <Field
                component="div"
                name="position_id"
              >
                <RadioGroup
                  title="Select your position"
                  name="position_id"
                  options={positionOptionsDto(positions)}
                />
              </Field>
            )}
          </div>

          <div className="register__form__input-wrapper">
            <Field
              name="photo"
              label="Upload your photo"
              error={touched.photo && !!errors.photo}
              helperText={errors.photo}
              accept=".jpeg,.jpg"
              component={InputUpload}
            />
          </div>

          <div className="register__form__button-wrapper">
            <Button
              type="submit"
              title="Sign up"
              disabled={!!Object.keys(errors).length || !Object.keys(touched).length}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};
