import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import SearchInput from '../../components/SearchInput';
import ListUsers from '../../components/ListUsers';

import React, { ReactElement, FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { getUserData, deleteUsers } from '../../action/actionCreator';
import type { RootState } from '../../store/store';

const Home: FC<any> = (): ReactElement => {
	const state = useAppSelector((state: RootState) => state.users);
	const dispatch = useAppDispatch();

	const handleDeleteUsers = () => dispatch(deleteUsers());

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				mt: 2
			}}
		>
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
				<SearchInput
					sx={{ width: '100%' }}
					keyPressAction={(val: string) => dispatch(getUserData(val))}
					label={'Search for Users'}
				/>
				<Button
					onClick={handleDeleteUsers}
					sx={{ width: 200, ml: 1, display: { sm: 'block', xs: 'none' } }}
					variant="contained"
					color="error"
				>
					Clear users
				</Button>
			</Box>
			{state.isFetching ? <CircularProgress /> : <ListUsers clearUsers={handleDeleteUsers} userData={state.user} />}
		</Box>
	);
};

export default Home;
