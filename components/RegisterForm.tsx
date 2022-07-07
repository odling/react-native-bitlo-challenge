import React, { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import { StyleSheet } from "react-native";
import * as yup from "yup";
import { messages } from "../constants/Messages";
import Box from "./styled/Box";
import Text from "./styled/Text";
import { layout } from "../constants/Layout";
import TouchableBox from "./styled/TouchableBox";
import FormField from "./FormField";
import userService from "../services/UserService";
import SubmitButton from "./SubmitButton";

interface ILoginValues {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const [busy, setBusy] = useState<boolean>(false);
  const handleSend = async (values: ILoginValues) => {
    isMounted.current && setBusy(true);
    await userService.register(
      values.name,
      values.surname,
      values.email,
      values.password
    );
    isMounted.current && setBusy(false);
  };

  const isMounted = useRef<boolean>(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const schema = yup.object().shape({
    name: yup.string().required(messages.required_error),
    surname: yup.string().required(messages.required_error),
    email: yup
      .string()
      .email(messages.email_not_valid)
      .required(messages.required_error),
    password: yup.string().required(messages.required_error),
  });

  const initialFormValues = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

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
              {"Hesap Oluşturun"}
            </Text>
          </Box>
          <FormField
            value={values.name}
            label="Ad: "
            errorMessage={errors?.name}
            hasError={touched.name && errors.name !== ""}
            onBlur={handleBlur("name")}
            onChangeText={handleChange("name")}
            textContentType="name"
          />
          <FormField
            value={values.surname}
            label="Soyad: "
            errorMessage={errors?.surname}
            hasError={touched.surname && errors.surname !== ""}
            onBlur={handleBlur("surname")}
            onChangeText={handleChange("surname")}
            textContentType="familyName"
          />
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
  submitButton: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: layout.spacing.m,
    alignSelf: "center",
    borderRadius: 5,
    marginTop: layout.spacing.l,
  },
});
