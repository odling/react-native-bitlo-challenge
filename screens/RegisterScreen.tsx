import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RegisterForm from "../components/RegisterForm";
import ScreenView from "../components/ScreenView";
import { layout } from "../constants/Layout";

export default function RegisterScreen() {
  return (
    <ScreenView style={{ paddingTop: layout.spacing.xl }}>
      <KeyboardAwareScrollView
        extraHeight={100}
        showsVerticalScrollIndicator={false}
        enableOnAndroid
      >
        <RegisterForm />
      </KeyboardAwareScrollView>
    </ScreenView>
  );
}
