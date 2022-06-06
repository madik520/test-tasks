import { createAsyncThunk } from '@reduxjs/toolkit';

import { charactersConstants } from '../utils/actionConstants';
import { fetchApi } from '../utils/api';


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
