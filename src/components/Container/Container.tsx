import React, { FC, ReactNode } from 'react';
import "./container.scss";

interface IContainer {
  children: ReactNode
}

export const Container: FC<IContainer> = ({children}) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}
