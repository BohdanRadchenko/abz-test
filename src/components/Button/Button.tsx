import React, { FC, MouseEvent, useCallback } from 'react'
import { Typography } from "components";
import "./button.scss";

interface IButton {
  title: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit";
}

export const Button: FC<IButton> = ({ title, onClick, disabled, type = "button" }) => {
  const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
  }, [onClick]);

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className="button"
    >
      <Typography>{title}</Typography>
    </button>
  )
}
