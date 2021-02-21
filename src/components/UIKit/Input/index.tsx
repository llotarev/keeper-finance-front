import React from "react";
import "./style.css";
import "./modify.css";
import cn from "../styles/classNames";
import { UIKitThemeColorType } from "../styles/theme";

export interface UIKitInputPropsInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: UIKitThemeColorType;
}

export const Input: React.FC<UIKitInputPropsInterface> = (props) => {
  const { className, color, ...other } = props;

  return (
    <input
      className={cn({
        input: true,
        ["input-" + color]: Boolean(color),
        [String(className)]: true,
      })}
      {...other}
    />
  );
};
