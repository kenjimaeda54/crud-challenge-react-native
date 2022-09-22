import auth from "@react-native-firebase/auth";
import { UserProps } from "../../types/interfaces";

export default function AuthState() {
  let isAnonymous = true;
  auth().onAuthStateChanged(async (userState) => {
    isAnonymous = userState.isAnonymous;
  });
  return isAnonymous;
}
