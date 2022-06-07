import { createReducer } from '@reduxjs/toolkit';

import { fetchAllCharacters, getUserByName, selectCharacter, likeDislike } from '../actions/actionCreator';
import type { IState, IAllCharacters, CharacterTypes } from '../utils/types';

const initialState: IState = {
	allCharacters: {
		isFetching: false,
		characters: {} as IAllCharacters
	},
	charactersByName: {
		isFetching: false,
		characters: {} as IAllCharacters
	},
	selectedCharacter: {} as CharacterTypes,
	favoriteChar: [] as CharacterTypes[]
};

const characterReducer = createReducer(initialState, (builder) => {
	//get all characters
	builder.addCase(fetchAllCharacters.pending, (state, action) => {
		state.allCharacters.isFetching = true;
	});
	builder.addCase(fetchAllCharacters.fulfilled, (state, action) => {
		const newCharData = action.payload?.results.map((i: CharacterTypes) => ({ ...i, favorite: false }));
		state.allCharacters.isFetching = false;
		state.allCharacters.characters = {
			info: action.payload.info,
			results: newCharData
		};
	});
	builder.addCase(fetchAllCharacters.rejected, (state, action) => {
		state.allCharacters.isFetching = false;
		state.allCharacters.characters = {} as IAllCharacters;
	});

	// autocomplete logic
	builder.addCase(getUserByName.pending, (state, action) => {
		state.charactersByName.isFetching = true;
	});
	builder.addCase(getUserByName.fulfilled, (state, action) => {
		state.charactersByName.isFetching = false;
		state.charactersByName.characters = action.payload;
	});

	//selected character logic
	builder.addCase(selectCharacter, (state, action) => {
		state.selectedCharacter = action.payload;
	});

	//like/dislike
	builder.addCase(likeDislike, (state, action) => {
		const newDataAllChar = state.allCharacters.characters.results.map((i) =>
			i.id === action.payload.id ? { ...i, favorite: action.payload.favorite } : i
		);
		const newDataFav = newDataAllChar.filter((i) => i.favorite === true);

		state.favoriteChar = newDataFav;
		state.allCharacters.characters = {
			info: state.allCharacters.characters.info,
			results: newDataAllChar
		};
	});

	builder.addDefaultCase((state, action) => state);
});

export default characterReducer;
