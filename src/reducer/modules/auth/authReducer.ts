import { produce } from "immer";
import { createReducer } from "@reduxjs/toolkit";
import { user, isLoggedOut, isLoggedIn } from "./actions";
import { UserProps } from "../../../types/interfaces";

const initialState = {} as UserProps;

export const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(isLoggedIn, (state) => {
    state.isAnonymous = false;
  });
  builder.addCase(isLoggedOut, (state) => {
    state.isAnonymous = true;
  });
  builder.addCase(user, (state) => {
    state;
  });
});
