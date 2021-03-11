export function UICoreTheme() {
  let colors = {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    info: "var(--color-info)",
    success: "var(--color-success)",
    warning: "var(--color-warning)",
    danger: "var(--color-danger)",
    dark: "var(--color-dark)",
    light: "var(--color-light)",
    gray: "var(--color-gray)",
  };

  function setColor(color: keyof typeof colors, value: string) {
    colors[color] = value;
    return colors;
  }

  return {
    /**
     * @colors - palette
     * */
    colors,

    /**
     * @methods - palette
     * */
    setColor,
  };
}

const { colors } = UICoreTheme();

export type UICoreThemeColorType = keyof typeof colors;
