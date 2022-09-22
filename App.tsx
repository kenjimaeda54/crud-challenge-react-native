import * as React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { ThemeProvider } from "@emotion/react";
import AppLoading from "expo-app-loading";
import { theme } from "./src/global/theme";
import {
  useFonts,
  Inter_900Black,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import Routes from "./src/routes";
import { store } from "./src/reducer";

GoogleSignin.configure({
  webClientId:
    "620663648181-3hma7tnqt5isroluascmslaiur9v2mnd.apps.googleusercontent.com",
});

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar translucent barStyle="light-content" />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}
