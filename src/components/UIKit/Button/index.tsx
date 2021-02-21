import React from "react";
import "./style.css";
import "./modify.css";
import cn from "../styles/classNames";
import { UIKitThemeColorType } from "../styles/theme";

export interface UIKitButtonPropsInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: UIKitThemeColorType;
}

export const Button: React.FC<UIKitButtonPropsInterface> = (props) => {
  const { className, color, ...other } = props;

  return (
    <button
      className={cn({
        button: true,
        ["button-" + color]: Boolean(color),
        [String(className)]: true,
      })}
      {...other}
    />
  );
};
