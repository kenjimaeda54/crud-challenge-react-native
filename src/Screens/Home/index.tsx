import React, { useRef, useState, useId, useEffect } from "react";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useSelector } from "react-redux";
import uuid from "react-native-uuid";
import fireStore from "@react-native-firebase/firestore";
import { AntDesign } from "@expo/vector-icons";
import { Container, Input, Button, WrapView, TextWarning } from "./styles";
import { useTheme } from "@emotion/react";
import CardTask from "../../components/CardTask";
import EditTask from "../../components/Modal";
import { Modalize } from "react-native-modalize";
import { FireStoreTasks, Tasks, UserProps } from "../../types/interfaces";
import { FlatList } from "react-native-gesture-handler";
import { View } from "react-native";
import { KeysCollection } from "../../types/keysCollection";
import { RootStore } from "../../reducer/";
import { current } from "immer";

export default function Header() {
  const theme = useTheme();
  const user = useSelector((state: RootStore) => state.authReducer);
  const refModalize = useRef<Modalize>(null);
  const [description, setDescription] = useState("");
  const [data, setData] = useState<Tasks[]>([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const [userAuth, setUserAuth] = useState<UserProps>({} as UserProps);
  const [taskSelected, setTaskSelected] = useState<Tasks>({} as Tasks);
  const [valueEditTask, setValueEditTask] = useState("");

  useEffect(() => {
    setUserAuth(user);
  }, [user]);

  const handleDelete = () => console.log("delete foi clidado");

  const handleModal = (itemSelected: Tasks) => {
    refModalize.current.open();
    setValueEditTask(itemSelected.description);
    setTaskSelected(itemSelected);
  };

  useEffect(() => {
    getDocument();
  }, [user]);

  async function getDocument() {
    let setEdges = new Set();
    fireStore()
      .collection(KeysCollection.tasks)
      .doc(userAuth.uid)
      .onSnapshot(async (querySnapshot) => {
        if (querySnapshot.exists) {
          const newData = querySnapshot.data() as FireStoreTasks;
          //unindo todas as tarefas presentes mais as novas que
          //serão construídas
          const unionTasks = [...data, ...newData.tasks];
          console.log(newData.tasks, "sera qeu autlizou");
          console.log(data, "nao foipara document");
          //removendo os array duplicado
          const tasks = unionTasks.filter((it) => {
            const typeDuplicated = setEdges.has(it.uuid);
            setEdges.add(it.uuid);
            return !typeDuplicated;
          });
          setData(tasks);
          return;
        }
        setEdges = null;
      });
  }

  async function handleTasks() {
    try {
      if (description.length < 5) return;
      const id = uuid.v4() as string;
      const db = fireStore().collection(KeysCollection.tasks);
      const doc = db.doc(userAuth.uid);
      //caso nao possua dados sera setado apenas valor
      //se possui sera setado construído o array de tarefas
      if (data.length === 0) {
        const tasks = [{ uuid: id, description }];
        doc.set({ tasks });
        setDescription("");
        getDocument();
        setIsRefresh(true);
      } else {
        let tasks = [...data, { uuid: id, description }];
        setDescription("");
        doc.set({ tasks });
        getDocument();
        setIsRefresh(true);
      }
    } catch (error) {
      console.log(error.toString());
    } finally {
      setIsRefresh(true);
    }
  }

  function handleEditTask() {
    //atualizando os dados do firebase
    console.log(taskSelected.uuid);
    const newTask = { uuid: taskSelected.uuid, description: valueEditTask };
    //criando uma lista para atualizar no banco
    const task = data.filter((it) => it.uuid !== taskSelected.uuid);
    const tasks = [...task, newTask];
    fireStore()
      .collection(KeysCollection.tasks)
      .doc(userAuth.uid)
      .set({ tasks })
      .then(() => {
        refModalize.current.close();
        const findTask = data.findIndex((it) => it.uuid === taskSelected.uuid);
        //removendo o índice para atualizar a lista
        setData(data.splice(findTask, 1));
        getDocument();
      })
      .catch((error) => console.log(error));
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

        <Button
          disabledButton={description.length < 5}
          disabled={description.length < 5}
          onPress={handleTasks}
        >
          <AntDesign name="pluscircleo" size={17} color={theme.colors.gray02} />
        </Button>
      </WrapView>
      <TextWarning>{userAuth?.displayName}: Mínimo 5 carácter</TextWarning>
      <FlatList
        data={data}
        keyExtractor={(item) => item.uuid}
        refreshing={isRefresh}
        renderItem={({ item }) => (
          <CardTask
            handleDelete={handleDelete}
            description={item.description}
            onPress={() => handleModal(item)}
          />
        )}
        contentContainerStyle={{
          paddingBottom: 40,
          marginTop: 50,
        }}
      />
      <EditTask
        ref={refModalize}
        value={valueEditTask}
        onPress={handleEditTask}
        onChangeText={setValueEditTask}
      />
    </Container>
  );
}
