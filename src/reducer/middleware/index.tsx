import auth from "@react-native-firebase/auth";
import { useDispatch } from "react-redux";
import { ActionsReduces } from "../../types/ActionsReduces";
import { UserProps } from "../../types/interfaces";
import { user } from "../modules/auth/actions";

export default function AuthState() {
  const dispatch = useDispatch();
  auth().onAuthStateChanged(async (userState) => {
    if (userState.isAnonymous) {
      dispatch({ type: ActionsReduces.isLoggedOut });
      return;
    }
    dispatch({ type: ActionsReduces.isLoggedIn });
    dispatch(user(userState));
  });
}
