import { createReducer } from '@reduxjs/toolkit';

import { getUserData, deleteUsers, getUserInfo, getUserRepos, filterRepos } from '../action/actionCreator';

import type { IState, UserTypes, UserRepos } from '../utils/types';

const initialState: IState = {
	isFetching: false,
	user: [] as UserTypes[],
	userInfo: {
		mainInfo: {} as UserTypes,
		repositories: {
			isFetching: false,
			repos: [] as UserRepos[],
			searchName: ''
		}
	}
};

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
		state.userInfo = {
			mainInfo: action.payload,
			repositories: {
				isFetching: false,
				repos: [] as UserRepos[],
				searchName: ''
			}
		};
	});

	//get user repos logic
	builder.addCase(getUserRepos.pending, (state, action) => {
		state.userInfo.repositories.isFetching = true;
	});
	builder.addCase(getUserRepos.fulfilled, (state, action) => {
		state.userInfo.repositories = {
			isFetching: false,
			repos: action.payload,
			searchName: ''
		};
	});

	builder.addCase(filterRepos, (state, action) => {
		state.userInfo.repositories.searchName = action.payload;
	});

	builder.addDefaultCase((state, action) => state);
});

export default users;
