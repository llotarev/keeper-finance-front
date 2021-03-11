import { Button } from "./Button";
import { Input } from "./Input";
import { UICoreTheme } from "./styles/theme";

export const components = {
  Button,
  Input,
};

export const theme = {
  UICoreTheme,
};

export const UICore = {
  ...components,
  ...theme,
};
