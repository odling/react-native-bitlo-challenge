import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { showMessage } from "react-native-flash-message";
import { messages } from "../constants/Messages";

const auth = getAuth();

class UserService {
  async login(email: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      showMessage({ message: messages.login_success, type: "success" });
    } catch (e) {
      showMessage({ message: messages.generic_error, type: "danger" });
    }
  }

  async register(
    name: string,
    surname: string,
    email: string,
    password: string
  ): Promise<void> {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: name + "_" + surname,
      });
      showMessage({ message: messages.register_success, type: "success" });
    } catch (e) {
      showMessage({ message: messages.generic_error, type: "danger" });
    }
  }

  async logout(): Promise<void> {
    try {
      signOut(auth);
      showMessage({ message: messages.logout_success, type: "success" });
    } catch (e) {
      showMessage({ message: messages.generic_error, type: "danger" });
    }
  }
}

const userService = new UserService();

export default userService;
