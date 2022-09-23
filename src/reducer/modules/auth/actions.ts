import { createAction } from "@reduxjs/toolkit";
import { ActionsReduces } from "../../../types/ActionsReduces";
import { UserProps } from "../../../types/interfaces";

export const user = createAction(
  ActionsReduces.userProps,
  function prepare(user: UserProps) {
    return {
      payload: user,
    };
  }
);

export const database = createAction(ActionsReduces.payloadData);

export type Actions = ReturnType<typeof user | typeof database>;
