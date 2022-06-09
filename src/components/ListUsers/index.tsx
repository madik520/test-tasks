import { Grid, Box, CardActionArea, CardMedia, Typography, Button } from '@mui/material';

import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../utils/hooks';
import { getUserInfo } from '../../action/actionCreator';

import type { IListUser } from './ListUser';

const ListUsers = ({ userData, clearUsers }: IListUser) => {
	const dispatch = useAppDispatch();

	if (userData.length > 0) {
		return (
			<Grid container direction={'column'} mt={2}>
				{userData.map((i) => {
					return (
						<Grid item key={i.id} sx={{ bgcolor: 'whitesmoke', padding: '8px', borderBottom: '1px solid grey' }}>
							<Link
								onClick={() => dispatch(getUserInfo({ ...i }))}
								style={{ textDecoration: 'none', color: 'black' }}
								to={`/user/${i.login}`}
							>
								<CardActionArea sx={{ display: 'flex', justifyContent: 'space-between' }}>
									<Box
										sx={{
											width: 50,
											height: 50,
											display: 'flex',
											alignItems: 'center'
										}}
									>
										<CardMedia component={'img'} src={`${i.avatar_url}`} alt={'user-img'} />
										<Typography sx={{ textTransform: 'capitalize', ml: 2 }} variant="h6">
											{i.login}
										</Typography>
									</Box>
									<Box
										sx={{
											width: 80,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between'
										}}
									>
										<Typography variant="h6">Repo: </Typography>
										<Typography variant="h6">{i.public_repos}</Typography>
									</Box>
								</CardActionArea>
							</Link>
						</Grid>
					);
				})}
				<Grid sx={{ mt: 2 }} item>
					<Button
						onClick={clearUsers}
						sx={{ width: '100%', display: { sm: 'none', xs: 'block' } }}
						variant="contained"
						color="error"
					>
						Clear users
					</Button>
				</Grid>
			</Grid>
		);
	} else {
		return null;
	}
};

export default ListUsers;
