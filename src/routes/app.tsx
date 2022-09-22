import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { Routes } from "../types/Routes";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={Routes.home} component={Home} />
    </Navigator>
  );
}
