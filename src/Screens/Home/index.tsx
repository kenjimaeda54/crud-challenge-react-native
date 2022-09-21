import React, { useRef } from "react";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { AntDesign } from "@expo/vector-icons";
import { Container, Input, Button, WrapView } from "./styles";
import { useTheme } from "@emotion/react";
import CardTask from "../../components/CardTask";
import EditTask from "../../components/Modal";
import { Modalize } from "react-native-modalize";

export default function Header() {
  const theme = useTheme();
  const refModalize = useRef<Modalize>(null);

  const handleDelete = () => console.log("delete foi clidado");

  const handleModal = () => refModalize.current.open();

  return (
    <Container
      style={{
        paddingTop: getStatusBarHeight() + 40,
        paddingHorizontal: 20,
      }}
    >
      <WrapView>
        <Input
          placeholderTextColor={theme.colors.gray01}
          placeholder="Insira as tarefas"
        />
        <Button>
          <AntDesign name="pluscircleo" size={17} color={theme.colors.gray02} />
        </Button>
      </WrapView>
      <CardTask
        handleDelete={handleDelete}
        description="precisamos editar esse campo japones"
        onPress={handleModal}
      />
      <EditTask ref={refModalize} description="ola mundo" />
    </Container>
  );
}
