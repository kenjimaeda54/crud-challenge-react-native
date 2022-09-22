import { produce } from "immer";
import fireStore from "@react-native-firebase/firestore";
import { createReducer, createSlice } from "@reduxjs/toolkit";
import { database, user } from "./actions";
import { FireStoreTasks, UserProps } from "../../../types/interfaces";
import { KeysCollection } from "../../../types/keysCollection";

let initialState = {} as UserProps;

export const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(user, (state, action) => {
    //precisa do retorno
    return (state = action.payload);
  });
});
