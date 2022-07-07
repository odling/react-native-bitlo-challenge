import React from "react";
import { Switch } from "react-native";
import ScreenView from "../components/ScreenView";
import Box from "../components/styled/Box";
import Text from "../components/styled/Text";
import { layout } from "../constants/Layout";
import { switchTheme } from "../features/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function AppSettingsScreen() {
  const isDarkMode = useAppSelector((state) => state.theme.name) === "dark";
  const dispatch = useAppDispatch();
  const handleSwitchTheme = (value: boolean) => {
    if (value != isDarkMode) dispatch(switchTheme());
  };
  return (
    <ScreenView style={{ paddingTop: layout.spacing.l }}>
      <Box paddingHorizontal="m" style={{flexDirection: "row", justifyContent: "space-between" }}>
        <Text variant="subHeader" color="primary">Gece Modu: </Text>
        <Switch value={isDarkMode} onValueChange={handleSwitchTheme} />
      </Box>
    </ScreenView>
  );
}
