import { Box } from "@mui/material";
import AutocompleteInput from "../components/Autocomplete";
import CharactersList from "../components/CharactersList";

import { ReactElement, FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { fetchAllCharacters } from '../actions/actionCreator';

import type { RootState } from "../store/store";


const Home: FC<any> = (): ReactElement => {
  const characters = useAppSelector((state: RootState) => state.characters.allCharacters.characters)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllCharacters())
  }, [dispatch])

  return (
    <Box>
      <AutocompleteInput />
      <CharactersList itemData={characters?.results} />
    </Box>
  );
};

export default Home;