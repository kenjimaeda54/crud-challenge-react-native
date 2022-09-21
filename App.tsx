import * as React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "@emotion/react";
import AppLoading from "expo-app-loading";
import Home from "./src/screens/Home/index";
import { theme } from "./src/global/theme";
import {
  useFonts,
  Inter_900Black,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

export default function Main() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent barStyle="light-content" />
      <Home />
    </ThemeProvider>
  );
}
