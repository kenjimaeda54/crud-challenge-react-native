import { produce } from "immer";
import { createReducer } from "@reduxjs/toolkit";
import { isLogged, isLoggedOut } from "./actions";

interface AuthReducer {
  isAnonymous: boolean;
}

const initialState = { isAnonymous: false } as AuthReducer;

export const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(isLogged, (state, action) => {});
  builder.addCase(isLoggedOut, (state, action) => {});
});
