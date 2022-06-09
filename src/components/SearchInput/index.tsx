import TextField from '@mui/material/TextField';

import { ChangeEvent, KeyboardEvent, useState } from 'react';

import type { ISearchInput } from './SearchInput';

const SearchInput = ({ label, keyPressAction, onChange, sx }: ISearchInput) => {
	const [value, setValue] = useState<string>('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value);
		if (onChange) {
			onChange(e.currentTarget.value);
		}
	};
	const handleKeyPress = ({ key }: KeyboardEvent<HTMLInputElement>) => {
		if (key === 'Enter') {
			if (keyPressAction) {
				keyPressAction(value);
				setValue('');
			}
		}
	};

	return (
		<TextField
			sx={sx}
			id="outlined-basic"
			label={label}
			variant="outlined"
			value={value}
			onChange={handleChange}
			onKeyPress={handleKeyPress}
		/>
	);
};

export default SearchInput;
