import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import { charactersConstants } from '../utils/actionConstants';
import { fetchApi } from '../utils/api';
import type { CharacterTypes } from '../utils/types';

export const fetchAllCharacters = createAsyncThunk(
  charactersConstants.getCharacter,
  async () => {
    return await fetchApi();
  }
)

export const getUserByName = createAsyncThunk(
  charactersConstants.getCharacterByName,
  async (name: string) => {
    return await fetchApi(name);
  }
)

export const selectCharacter = createAction<CharacterTypes>(charactersConstants.selectedCharacter)

export const likeDislike = createAction(charactersConstants.likeDislike, (id, favorite) => {
  return {
    payload: {
      id,
      favorite
    }
  }
});

