import React, { useState } from "react";
import { StyleSheet } from "react-native";
import ScreenView from "../components/ScreenView";
import Box from "../components/styled/Box";
import Text from "../components/styled/Text";
import SubmitButton from "../components/SubmitButton";
import { layout } from "../constants/Layout";
import { useAuthentication } from "../hooks/useAuthentication";
import { useTheme } from "../hooks/useTheme";
import userService from "../services/UserService";

export default function UserInfoScreen() {
  const [busy, setBusy] = useState<boolean>(false);

  const handleLogOut = async () => {
    setBusy(true);
    await userService.logout();
    setBusy(false);
  };

  const { user } = useAuthentication();
  const theme = useTheme();

  let firstName: string = "",
    lastName: string = "";
  if (user?.displayName) {
    [firstName, lastName] = user?.displayName.split("_");
  }
  return (
    <ScreenView style={{ paddingTop: layout.spacing.s }}>
      <Box>
        <Box paddingHorizontal="l" style={[styles.fieldContainer, {borderColor: theme.secondary}]}>
          <Text variant="body" color="primary" style={styles.titleText}>
            {"Ad:"}
          </Text>
          <Text variant="body" color="primary" style={styles.infoText}>
            {firstName}
          </Text>
        </Box>
        <Box paddingHorizontal="l" style={[styles.fieldContainer, {borderColor: theme.secondary}]}>
          <Text variant="body" color="primary" style={styles.titleText}>
            {"Soyad:"}
          </Text>
          <Text variant="body" color="primary" style={styles.infoText}>
            {lastName}
          </Text>
        </Box>
        <Box paddingHorizontal="l" style={[styles.fieldContainer, {borderColor: theme.secondary, borderBottomWidth: 0.5}]}>
          <Text variant="body" color="primary" style={styles.titleText}>
            {"E-Posta:"}
          </Text>
          <Text variant="body" color="primary" style={styles.infoText}>
            {user?.email}
          </Text>
        </Box>
      </Box>
      <SubmitButton
        onPress={handleLogOut}
        disabled={false}
        busy={busy}
        label="Çıkış Yap"
      />
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  fieldContainer: {
    borderTopWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
  },
  titleText: {
    fontWeight: "bold",
  },
  infoText: {
    textAlign: "right",
  },
});
