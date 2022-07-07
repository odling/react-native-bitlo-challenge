import React from "react";
import { Text as RNText } from "react-native";
import { IColors } from "../../constants/Theme";
import { layout } from "../../constants/Layout";
import { useTheme } from "../../hooks/useTheme";

interface TextProps extends React.ComponentProps<typeof RNText> {
  variant?: keyof typeof layout.textVariants;
  color?: keyof IColors;
}

const Text = ({ style, variant, color, ...rest }: TextProps) => {
  // const themeName = useAppSelector((state) => state.theme.name);
  // const themeName = "light";

  const colors = useTheme();

  return (
    <RNText
      style={[
        color && {
          color: colors[color],
        },
        variant && layout.textVariants[variant],
        style,
      ]}
      {...rest}
    />
  );
};

export default Text;
