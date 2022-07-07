import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { layout } from "../constants/Layout";
import Box from "./styled/Box";
import Text from "./styled/Text";

interface FormFieldProps {
  label: string;
  hasError?: boolean;
  errorMessage?: string;
  onChangeText: (e: any) => void;
  onBlur: (e: any) => void;
  value: string;
}

export default function FormField({
  label,
  hasError,
  errorMessage,
  onChangeText,
  onBlur,
  value,
  ...rest
}: FormFieldProps & TextInputProps) {
  return (
    <Box marginTop="s">
      <Box style={styles.titleContainer} paddingLeft="xs">
        <Text variant="body" color="primary">
          {label}
        </Text>
        {hasError && (
          <Text color="negative" variant="error">
            {errorMessage}
          </Text>
        )}
      </Box>
      <TextInput
        style={styles.field}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        {...rest}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: layout.spacing.s,
    marginHorizontal: layout.spacing.m,
  },
  field: {
    marginTop: layout.spacing.s,
    paddingLeft: layout.spacing.s,
    marginHorizontal: layout.spacing.m,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    height: 40,
  },
});
