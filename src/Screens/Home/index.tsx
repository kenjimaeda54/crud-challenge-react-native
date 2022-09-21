import React, { useRef, useState, useId } from "react";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import fireStore from "@react-native-firebase/firestore";
import { AntDesign } from "@expo/vector-icons";
import { Container, Input, Button, WrapView, TextWarning } from "./styles";
import { useTheme } from "@emotion/react";
import CardTask from "../../components/CardTask";
import EditTask from "../../components/Modal";
import { Modalize } from "react-native-modalize";
import { FireStoreProps } from "../../types/interfaces";
import { FlatList } from "react-native-gesture-handler";
import { View } from "react-native";
import { KeysCollection } from "../../types/keysCollection";

export default function Header() {
  const theme = useTheme();
  const refModalize = useRef<Modalize>(null);
  const [description, setDescription] = useState("");
  const [data, setData] = useState<FireStoreProps[]>();
  const [isRefresh, setIsRefresh] = useState(false);

  const handleDelete = () => console.log("delete foi clidado");

  const handleModal = () => refModalize.current.open();

  async function handleTasks() {
    if (description.length < 5) return;
    await fireStore()
      .collection(KeysCollection.tasks)
      .add({ description })
      .then((it) => {
        const newTask = {
          uid: it.id,
          description,
        };
        if (data?.length > 0) {
          setData((previous) => [...previous, newTask]);
        } else {
          setData([newTask]);
        }
        setDescription("");
        setIsRefresh(true);
      })
      .catch((error) => {
        console.log(error.toString());
      })
      .finally(() => setIsRefresh(false));
  }

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
          autoCorrect={false}
          value={description}
          autoCapitalize="none"
          onChangeText={setDescription}
        />

        <Button onPress={handleTasks}>
          <AntDesign name="pluscircleo" size={17} color={theme.colors.gray02} />
        </Button>
      </WrapView>
      <TextWarning>Mínimo 5 carácter</TextWarning>
      <FlatList
        data={data}
        keyExtractor={(item) => item.uid}
        refreshing={isRefresh}
        renderItem={({ item }) => (
          <CardTask
            handleDelete={handleDelete}
            description={item.description}
            onPress={handleModal}
          />
        )}
        contentContainerStyle={{
          paddingBottom: 40,
          marginTop: 50,
        }}
      />
      <EditTask ref={refModalize} description="ola mundo" />
    </Container>
  );
}
