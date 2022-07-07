import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack";
import navigationService from "../services/NavigationService";
import { useAuthentication } from "../hooks/useAuthentication";
import LoginScreen from "../screens/LoginScreen";
import { useTheme } from "../hooks/useTheme";
import RegisterScreen from "../screens/RegisterScreen";
import MarketsScreen from "../screens/MarketsScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native";
import UserInfoScreen from "../screens/UserInfoScreen";
import AppSettingsScreen from "../screens/AppSettingsScreen";
import MarketDetailsScreen from "../screens/MarketDetailsScreen";
import { EvilIcons, Ionicons } from "expo-vector-icons";
import { layout } from "../constants/Layout";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamsList {}
  }
}

export default function Navigation() {
  return (
    <NavigationContainer
      ref={(navigatorRef) =>
        navigationService.setTopLevelNavigator(navigatorRef)
      }
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

export type RootStackParamsList = {
  Auth: undefined;
  Main: undefined;
  Login: undefined;
  Register: undefined;
  Markets: undefined;
  MarketDetails: { marketCode: string };
  UserInfo: undefined;
  Settings: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamsList> =
  StackScreenProps<RootStackParamsList, Screen>;

const Stack = createStackNavigator<RootStackParamsList>();

function AuthStack() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerTintColor: theme.primary,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerTitle: "Bitlo" }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerTitle: "Bitlo", headerBackTitle: "Giriş" }}
      />
    </Stack.Navigator>
  );
}

function UserInfoButton() {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={() => navigationService.navigate("UserInfo")}
      style={{ marginLeft: layout.spacing.m }}
    >
      <EvilIcons name="user" size={30} color={theme.primary} />
    </TouchableOpacity>
  );
}

function SettingsButton() {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={() => navigationService.navigate("Settings")}
      style={{ marginRight: layout.spacing.m }}
    >
      <EvilIcons name="gear" size={30} color={theme.primary} />
    </TouchableOpacity>
  );
}

function MainStack() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTitleAlign: "center",
        headerTintColor: theme.primary,
        headerShadowVisible: false
      }}
    >
      <Stack.Screen
        name="Markets"
        component={MarketsScreen}
        options={{
          headerTitle: "Marketler",
          headerLeft: UserInfoButton,
          headerRight: SettingsButton,
        }}
      />
      <Stack.Screen
        name="MarketDetails"
        component={MarketDetailsScreen}
        options={{ headerTitle: "Market Detayları" }}
      />
      <Stack.Screen
        name="UserInfo"
        component={UserInfoScreen}
        options={{ headerTitle: "Kullanıcı Bilgileri" }}
      />
      <Stack.Screen
        name="Settings"
        component={AppSettingsScreen}
        options={{ headerTitle: "Ayarlar" }}
      />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  const { user } = useAuthentication();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Main" component={MainStack} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
}
