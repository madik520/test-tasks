import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { save, load } from 'redux-localstorage-simple';

import thunk from 'redux-thunk';

import { rootReducer } from '../reducers/rootReducer';

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([thunk, save()]),
	devTools: process.env.NODE_ENV === 'development',
	preloadedState: load()
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
