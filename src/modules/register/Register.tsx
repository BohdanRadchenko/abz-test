import React, { useMemo } from 'react';
import {
  Container,
  ETypographyType,
  Loader,
  Typography,
} from "components";
import { useSelector } from "stores/hooks";
import { RegisterForm } from "./RegisterForm";
import { SuccessBlock } from "./SuccessBlock";
import "./register.scss"

export const Register = () => {
  const { loading, register: { status } } = useSelector(({ user }) => user);

  const content = useMemo(() => {
    return !status ? <RegisterForm/> : <SuccessBlock/>;
  }, [status]);

  const title = useMemo(() => !status
    ? "Working with POST request"
    : "User successfully registered", [status]);

  return (
    <Container>
      <div className="register">
        <Typography
          type={ETypographyType.HEADING}
          style={{ margin: "140px 0 50px 0" }}
        >
          {title}
        </Typography>

        {loading && <Loader/>}

        {!loading && content}

      </div>
    </Container>
  );
};
