import React from "react";
import "./style.css";
import "./modify.css";
import cn from "../styles/classNames";
import { UICoreThemeColorType } from "../styles/theme";

export interface UICoreButtonPropsInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: UICoreThemeColorType;
}

export const Button: React.FC<UICoreButtonPropsInterface> = (props) => {
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
