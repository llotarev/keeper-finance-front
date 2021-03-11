import React from "react";
import "./style.css";
import "./modify.css";
import cn from "../styles/classNames";
import { UICoreThemeColorType } from "../styles/theme";

export interface UICoreInputPropsInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: UICoreThemeColorType;
}

export const Input: React.FC<UICoreInputPropsInterface> = (props) => {
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
