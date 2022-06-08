import { createReducer } from "@reduxjs/toolkit";

import { getUserData, deleteUsers, getUserInfo } from "../action/actionCreator";

import type { IState, UserTypes } from "../utils/types";

const initialState: IState = {
  isFetching: false,
  user: [] as UserTypes[],
  userInfo: {} as UserTypes
}

const users = createReducer(initialState, (builder) => {
  //get user logic
  builder.addCase(getUserData.pending, (state, action) => {
    state.isFetching = true;
  });
  builder.addCase(getUserData.fulfilled, (state, action) => {
    const newData = action.payload?.id ? [...state.user, action.payload] : [...state.user];
  
    state.isFetching = false;
    state.user = Array.from(new Map(newData.map((item) => [item.login, item])).values());
  });

  //delete user
  builder.addCase(deleteUsers, (state, action) => {
    state.user = [] as UserTypes[];
  });

  //user info logic
  builder.addCase(getUserInfo, (state, action) => {
    state.userInfo = action.payload
  })

  builder.addDefaultCase((state, action) => state);
});

export default users;