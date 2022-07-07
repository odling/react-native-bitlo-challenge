import { NavigationContainerRef } from "@react-navigation/native";
import { RootStackParamsList } from "../navigation";

class NavigationService {
  _navigatorRef: NavigationContainerRef<RootStackParamsList> | null | undefined;
  constructor() {}

  setTopLevelNavigator(
    ref: NavigationContainerRef<RootStackParamsList> | null
  ) {
    this._navigatorRef = ref;
  }

  navigate(routeName: keyof RootStackParamsList, params: any = null) {
    this._navigatorRef?.navigate(routeName, params);
  }
}

const navigationService = new NavigationService();
export default navigationService;
