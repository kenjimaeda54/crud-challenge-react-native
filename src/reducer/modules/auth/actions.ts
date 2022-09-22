import { createAction } from "@reduxjs/toolkit";
import { ActionsReduces } from "../../../types/ActionsReduces";

export const isLogged = createAction(ActionsReduces.isLogged);
export const isLoggedOut = createAction(ActionsReduces.isLoggedOut);
