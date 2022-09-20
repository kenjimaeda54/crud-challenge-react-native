import * as React from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Home from "./src/Screens/Home/index";

export default function Main() {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}
