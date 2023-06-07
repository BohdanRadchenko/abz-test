import React from 'react';
import {
  Button,
  ETypographyColor,
  ETypographyType,
  Typography
} from "components";
import "./banner.scss";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__wrapper">
        <Typography
          type={ETypographyType.HEADING}
          color={ETypographyColor.WHITE}
          style={{ marginBottom: "21px" }}
        >
          Test assignment for front-end developer
        </Typography>
        <Typography
          color={ETypographyColor.WHITE}
          style={{ marginBottom: "32px" }}
        >
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
          understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They
          should also be excited to learn, as the world of Front-End Development keeps evolving.
        </Typography>
        <Button title="Sign up"/>
      </div>
    </div>
  );
};
