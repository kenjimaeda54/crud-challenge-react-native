import { configureStore } from "@reduxjs/toolkit";
import { ActionsReduces } from "../types/ActionsReduces";
import AuthState from "./middleware";
import { authReducer } from "./modules/auth/authReducer";

//action e o ação que foi efetuada
//next dispatch
//store eu tenho acesso ao dispatch
const middleWareLogged = (store) => (next) => (action) => {
  AuthState();
  next(action);
};

export const store = configureStore({
  reducer: {
    authReducer,
  },
  middleware: [middleWareLogged],
});
