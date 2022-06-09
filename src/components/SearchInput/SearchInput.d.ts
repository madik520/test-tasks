import { SxProps } from '@mui/material';

export interface ISearchInput {
	label: string;
	keyPressAction?: (name: string) => void;
	onChange?: (val: string) => void;
	sx?: SxProps;
}
