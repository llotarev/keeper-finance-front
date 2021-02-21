import React from "react";
import "./style.css";
import "./modify.css";
import cn from "../styles/classNames";

export interface UIKitInputPropsInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<UIKitInputPropsInterface> = (props) => {
  const { className, ...other } = props;

  return (
    <input
      className={cn({
        input: true,
        [String(className)]: true,
      })}
      {...other}
    />
  );
};
