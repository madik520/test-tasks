import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';

import { useState, useEffect, FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { getUserByName } from '../../actions/actionCreator';

import type { RootState } from '../../store/store';
import { CharacterTypes } from '../../utils/types';

const AutocompleteInput: FC = () => {
	const [value, setValue] = useState<CharacterTypes | null>(null);
	const [inputValue, setInputValue] = useState<string>('');
	const [options, setOption] = useState<CharacterTypes[]>([]);

	const dispatch = useAppDispatch();
	const charactData = useAppSelector((state: RootState) => state.characters.charactersByName);

	useEffect(() => {
		let active = true;

		if (inputValue === '') {
			setOption(value ? [value] : []);
			return undefined;
		}

		dispatch(getUserByName(inputValue)).then((data) => {
			if (active) {
				let newOptions: CharacterTypes[] = [];
				if (value) {
					newOptions = [value];
				}

				if (data.payload?.results) {
					newOptions = [...newOptions, ...data.payload?.results];
				}

				setOption(newOptions);
			}
		});

		return () => {
			active = false;
		};
	}, [dispatch, inputValue, value]);

	return (
		<Autocomplete
			sx={{ width: '100%', mt: 2 }}
			options={options}
			getOptionLabel={(option) => (typeof option === 'string' ? option : option.name)}
			loading={charactData.isFetching}
			onChange={(event: any, newValue: CharacterTypes | null) => {
				setOption(newValue ? [newValue, ...options] : options);
				setValue(newValue);
			}}
			value={value}
			inputValue={inputValue}
			onInputChange={(event, newInputValue) => {
				setInputValue(newInputValue);
			}}
			filterOptions={(x) => x}
			autoComplete
			includeInputInList
			filterSelectedOptions
			renderInput={(params) => (
				<TextField
					{...params}
					label="Search character by name"
					InputProps={{
						...params.InputProps,
						endAdornment: (
							<>
								{charactData.isFetching ? <CircularProgress color="inherit" size={20} /> : null}
								{params.InputProps.endAdornment}
							</>
						)
					}}
				/>
			)}
			renderOption={(props, option) => {
				return (
					<ListItem {...props} key={props.id}>
						<Link style={{ width: '100%', color: 'black', textDecoration: 'none' }} to={`/character/${option.id}`}>
							<ListItemButton>
								<ListItemAvatar>
									<Avatar alt={`${option.name}`} src={`${option.image}`} />
								</ListItemAvatar>
								<ListItemText primary={option.name} />
							</ListItemButton>
						</Link>
					</ListItem>
				);
			}}
		/>
	);
};

export default AutocompleteInput;
