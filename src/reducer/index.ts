import {
  configureStore,
  applyMiddleware,
  Store,
  Action,
  Dispatch,
} from "@reduxjs/toolkit";
import Routes from "../routes";
import auth from "@react-native-firebase/auth";
import fireStore from "@react-native-firebase/firestore";
import { authReducer } from "./modules/auth/reducers";
import { user } from "./modules/auth/actions";
import { UserProps } from "../types/interfaces";
import { ActionsReduces } from "../types/ActionsReduces";
import { KeysCollection } from "../types/keysCollection";

// action e o ação que foi disparada
// next seria uma função de dispatch(alguma acao)
// store eu tenho acesso ao dispatch e o getState

//função curried,ou seja uma função que retorna outra
const middleWareLogged =
  (store: Store) => (next: Dispatch) => (action: Action) => {
    if (action.type === ActionsReduces.payloadUser) {
      auth().onAuthStateChanged(async (userState) => {
        store.dispatch(user(userState));
      });
    }

    next(action);
  };

export const store = configureStore({
  reducer: {
    authReducer,
  },
  middleware: [middleWareLogged],
});

export type RootStore = ReturnType<typeof store.getState>;
