import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../reducer";
import auth from "@react-native-firebase/auth";
import { user } from "../reducer/modules/auth/actions";
import { ActionsReduces } from "../types/ActionsReduces";
import App from "./app";
import { UserProps } from "../types/interfaces";

export default function Routes() {
  const user = useSelector((state: RootStore) => state.authReducer);
  const [isAnonymous, setIsAnonymous] = useState(true);

  //precisa do useEffect
  useEffect(() => {
    if (Object.keys(user).length > 0) {
      setIsAnonymous(user.isAnonymous);
    }
  }, [user]);

  return (
    <NavigationContainer>
      {isAnonymous ? <Login /> : <App />}
    </NavigationContainer>
  );
}
