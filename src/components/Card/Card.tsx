import React, { FC, ReactNode } from 'react';
import "./card.scss";

interface ICard {
  children: ReactNode;
}

export const Card: FC<ICard> = ({ children, ...rest }) => {
  return (
    <div className="card" {...rest}>
      {children}
    </div>
  );
};
