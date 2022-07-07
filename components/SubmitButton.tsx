import React from "react";
import { StyleSheet } from "react-native";
import { layout } from "../constants/Layout";
import Text from "./styled/Text";
import TouchableBox from "./styled/TouchableBox";
import { DotIndicator } from "react-native-indicators";
import { useTheme } from "../hooks/useTheme";

interface SubmitButtonProps {
  disabled: boolean;
  onPress: (values: any) => void;
  busy: boolean;
  label?: string;
}

export default function SubmitButton({
  disabled,
  onPress,
  busy,
  label
}: SubmitButtonProps) {
  const theme = useTheme();

  return (
    <TouchableBox
      style={styles.submitButton}
      onPress={onPress}
      disabled={disabled}
      enabledColor="primary"
      disabledColor="secondary"
    >
      {busy ? (
        <DotIndicator color={theme.background} size={10} count={3} />
      ) : (
        <Text variant="body" color="background">
          {label || "Gönder"}
        </Text>
      )}
    </TouchableBox>
  );
}

const styles = StyleSheet.create({
  submitButton: {
    width: "80%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 5,
    marginTop: layout.spacing.l,
  },
});
