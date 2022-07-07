import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { layout } from "../constants/Layout";
import { useTheme } from "../hooks/useTheme";
import { ViewProps } from "react-native";

export default function ScreenView({ style, ...props }: ViewProps) {
  const theme = useTheme();
  return (
    <SafeAreaView
      edges={["left", "right", "bottom"]}
      style={[
        {
          flex: 1,
          backgroundColor: theme.background,
          paddingHorizontal: layout.spacing.s
        },
        style,
      ]}
      {...props}
    />
  );
}
