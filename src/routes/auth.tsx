import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../types/Routes";
import Login from "../screens/Login";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={Routes.login} component={Login} />
    </Navigator>
  );
}
