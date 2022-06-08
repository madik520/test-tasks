import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import { userConst } from '../utils/actionConstants';
import { fetchApi } from '../utils/api';

import type { UserTypes } from '../utils/types';

export const getUserData = createAsyncThunk(
  userConst.getUser,
  async (name: string) => {
    const data = await fetchApi(name);
    return data;
  }
)

export const deleteUsers = createAction(userConst.deleteUsers);

export const getUserInfo = createAction<UserTypes>(userConst.getUserInfo);