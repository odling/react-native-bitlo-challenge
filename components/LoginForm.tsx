import { Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import * as yup from "yup";
import { layout } from "../constants/Layout";
import { messages } from "../constants/Messages";
import navigationService from "../services/NavigationService";
import userService from "../services/UserService";
import FormField from "./FormField";
import Box from "./styled/Box";
import Text from "./styled/Text";
import SubmitButton from "./SubmitButton";

interface ILoginValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [busy, setBusy] = useState<boolean>(false);
  const handleSend = async (values: ILoginValues) => {
    isMounted.current && setBusy(true);
    await userService.login(values.email, values.password);
    isMounted.current && setBusy(false);
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(messages.email_not_valid)
      .required(messages.required_error),
    password: yup.string().required(messages.required_error),
  });

  const initialFormValues = {
    email: "",
    password: "",
  };

  const handleRegisterPress = () => {
    navigationService.navigate("Register");
  };

  const isMounted = useRef<boolean>(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={handleSend}
      validationSchema={schema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        isValid,
        touched,
        errors,
      }) => (
        <>
          <Box>
            <Text variant="header" color="primary" style={styles.formTitle}>
              {"Hesabınıza Giriş Yapın"}
            </Text>
          </Box>
          <FormField
            value={values.email}
            label="E-Posta"
            errorMessage={errors?.email}
            hasError={touched.email && errors.email !== ""}
            onBlur={handleBlur("email")}
            onChangeText={handleChange("email")}
            textContentType="emailAddress"
            autoCapitalize="none"
          />
          <FormField
            value={values.password}
            label="Şifre:"
            errorMessage={errors?.password}
            hasError={touched.password && errors.password !== ""}
            onBlur={handleBlur("password")}
            onChangeText={handleChange("password")}
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
          />
          <SubmitButton
            onPress={handleSubmit}
            disabled={!isValid || busy}
            busy={busy}
          />
          <Text variant="body" color="primary" style={styles.register}>
            {"Hesabınız yok mu? "}
            <Text color="info" onPress={handleRegisterPress}>
              {"Hemen oluşturun."}
            </Text>
          </Text>
        </>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  formTitle: {
    marginVertical: layout.spacing.m,
    textAlign: "center",
  },
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
  register: {
    width: "100%",
    marginTop: layout.spacing.l,
    paddingLeft: layout.spacing.l,
  },
});
