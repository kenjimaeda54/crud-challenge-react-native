import {
  configureStore,
  createListenerMiddleware,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { ActionsReduces } from "../types/ActionsReduces";
import AuthState from "./middleware";
import { authReducer } from "./modules/auth/reducer";

//action e o ação que foi efetuada
//next dispatch
//store eu tenho acesso ao dispatch
const middleWareLogged = (store) => (next) => (action) => {
  let isAnonymous = true;
  if (action.type === ActionsReduces.isLogged) {
    isAnonymous = AuthState();
  }
  if (isAnonymous) {
    console.log("nao foi possível logar");
  }
  next(action);
};

export const store = configureStore({
  reducer: {
    authReducer,
  },
  middleware: [middleWareLogged],
});
