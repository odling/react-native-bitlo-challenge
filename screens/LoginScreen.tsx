import React from "react";
import LoginForm from "../components/LoginForm";
import ScreenView from "../components/ScreenView";
import { layout } from "../constants/Layout";

export default function LoginScreen() {
  return (
    <ScreenView style={{paddingTop: layout.spacing.xl}}>
      <LoginForm />
    </ScreenView>
  );
}
