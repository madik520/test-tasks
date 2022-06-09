import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import { userConst } from '../utils/actionConstants';
import { fetchApi, fetchRepos } from '../utils/api';

import type { UserTypes } from '../utils/types';

export const getUserData = createAsyncThunk(userConst.getUser, async (name: string) => {
	const data = await fetchApi(name);

	return data;
});

export const deleteUsers = createAction(userConst.deleteUsers);

export const getUserInfo = createAction<UserTypes>(userConst.getUserInfo);

export const getUserRepos = createAsyncThunk(userConst.getUserRepos, async (url: string) => {
	const data = await fetchRepos(url);

	return data;
});

export const filterRepos = createAction<string>(userConst.filterRepos);
