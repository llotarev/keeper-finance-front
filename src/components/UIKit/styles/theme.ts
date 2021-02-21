export function UIKitTheme() {
  let colors = {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
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
     * @colors - palette
     * */
    setColor,
  };
}

/**
 *
 * */
const { colors } = UIKitTheme();

export type UIKitThemeColorType = keyof typeof colors;
