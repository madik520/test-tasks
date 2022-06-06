import { createReducer } from '@reduxjs/toolkit';

import { fetchAllCharacters, getUserByName } from '../actions/actionCreator';
import type { IState, IAllCharacters } from '../utils/types';

const initialState: IState = {
  allCharacters: {
    isFetching: false,
    characters: {} as IAllCharacters
  },
  charactersByName: {
    isFetching: false,
    characters: {} as IAllCharacters
  },
}

const characterReducer = createReducer(initialState, (builder) => {
  //get all characters
  builder.addCase(fetchAllCharacters.pending, (state, action) => {
    state.allCharacters.isFetching = true;
  })
  builder.addCase(fetchAllCharacters.fulfilled, (state, action) => {
    state.allCharacters.isFetching = false;
    state.allCharacters.characters = action.payload
  })
  builder.addCase(fetchAllCharacters.rejected, (state, action) => {
    state.allCharacters.isFetching = false;
    state.allCharacters.characters = {} as IAllCharacters;
  })

  // autocomplete logic
  builder.addCase(getUserByName.pending, (state, action) => {
    state.charactersByName.isFetching = true;
  })
  builder.addCase(getUserByName.fulfilled, (state, action) => {
    state.charactersByName.isFetching = false;
    state.charactersByName.characters = action.payload;
  })

  builder.addDefaultCase((state, action) => state);
});

export default characterReducer;