import "./config/firebase";
import "./services/MarketService";
import {
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Navigation from "./navigation";
import { store } from "./store/store";
import StatusBar from "./components/StatusBar";
import { LogBox } from "react-native";
import FlashMessage from "react-native-flash-message";

// Note: This warning is generated due to Firebase package. It is not a
// crash condition for the app. At the moment, since it is not possible to
// fix the issue in the package, we are just ignoring the warning.
LogBox.ignoreLogs([
  "Warning: componentWillMount has been renamed, and is not recommended for use.",
]);

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
        <FlashMessage
          position="top"
        />
      </SafeAreaProvider>
    </Provider>
  );
}
