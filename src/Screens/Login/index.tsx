import React from "react";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@emotion/react";
import { Container, TextLogin } from "./styles";
import { store } from "../../reducer";
import { ActionsReduces } from "../../types/ActionsReduces";

export default function Login() {
  const { colors } = useTheme();

  async function handleLogin() {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    store.dispatch({ type: ActionsReduces.payloadUser });
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <Container
      resizeMode="cover"
      source={require("../../assets/images/splashScreen.png")}
    >
      <TouchableOpacity onPress={handleLogin}>
        <AntDesign name="google" size={50} color={colors.gray01} />
      </TouchableOpacity>
      <TextLogin>
        Clique no ícone acima para logar,usaremos sua conta do google
      </TextLogin>
    </Container>
  );
}
