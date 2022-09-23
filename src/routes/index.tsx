import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import { useSelector } from "react-redux";
import { RootStore } from "../reducer";
import App from "./app";

export default function Routes() {
  const user = useSelector((state: RootStore) => state.authReducer);
  const [isAnonymous, setIsAnonymous] = useState(true);

  //precisa do useEffect
  useEffect(() => {
    if (user?.isAnonymous === false) {
      setIsAnonymous(user.isAnonymous);
    }
  }, [user]);

  return (
    <NavigationContainer>
      {isAnonymous ? <Login /> : <App />}
    </NavigationContainer>
  );
}
