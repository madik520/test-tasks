import { Box } from '@mui/material';
import AutocompleteInput from '../components/Autocomplete';
import CharactersList from '../components/CharactersList';

import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { fetchAllCharacters } from '../actions/actionCreator';

import type { RootState } from '../store/store';

const Home = () => {
	const characters = useAppSelector((state: RootState) => state.characters.allCharacters.characters);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!characters.hasOwnProperty('results')) {
			dispatch(fetchAllCharacters());
		}
	}, [characters, dispatch]);

	return (
		<Box>
			<AutocompleteInput />
			<CharactersList itemData={characters?.results} />
		</Box>
	);
};

export default Home;
