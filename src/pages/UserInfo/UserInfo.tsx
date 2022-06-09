import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import SearchInput from '../../components/SearchInput';
import CircularProgress from '@mui/material/CircularProgress';

import { useEffect, useMemo } from 'react';

import { useAppSelector, useAppDispatch } from '../../utils/hooks';
import { getUserRepos, filterRepos } from '../../action/actionCreator';
import type { RootState } from '../../store/store';

import styles from './UserInfo.module.scss';

const UserInfo = () => {
	const userInfo = useAppSelector((state: RootState) => state.users.userInfo);
	const dispatch = useAppDispatch();

	const filteredWords = useMemo(() => {
		if (userInfo.repositories.searchName === '') {
			return userInfo.repositories.repos;
		}
		return userInfo.repositories.repos.filter((i) =>
			i.name.toLowerCase().includes(userInfo.repositories.searchName.toLowerCase())
		);
	}, [userInfo.repositories.repos, userInfo.repositories.searchName]);

	useEffect(() => {
		if (userInfo.mainInfo.hasOwnProperty('id')) {
			dispatch(getUserRepos(`${userInfo.mainInfo.repos_url}`));
		}
	}, [dispatch, userInfo.mainInfo]);

	if (userInfo.mainInfo.hasOwnProperty('login')) {
		return (
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					mt: 2
				}}
			>
				<div className={styles.infoBlock}>
					<div className={styles.userInfo}>
						<div className={styles.userImage}>
							<div>
								{!userInfo.mainInfo.avatar_url ? (
									<span>No image :(</span>
								) : (
									<img src={`${userInfo.mainInfo.avatar_url}`} alt={'avatar'} />
								)}
							</div>
						</div>
						<div className={styles.userInfoList}>
							<ul>
								<li>
									UserName: <span>{userInfo.mainInfo.login}</span>
								</li>
								<li>
									Email: <span>{!userInfo.mainInfo.email ? 'no email' : userInfo.mainInfo.email}</span>
								</li>
								<li>
									Location: <span>{userInfo.mainInfo.location}</span>
								</li>
								<li>
									Join Date: <span>{userInfo.mainInfo.created_at}</span>
								</li>
								<li>
									Followers: <span>{userInfo.mainInfo.followers}</span>
								</li>
								<li>
									Following: <span>{userInfo.mainInfo.following}</span>
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.userBio}>
						<p>
							Bio: <span>{userInfo.mainInfo.bio}</span>
						</p>
					</div>
				</div>
				<SearchInput
					onChange={(val: string) => dispatch(filterRepos(val))}
					sx={{ width: '100%' }}
					label={"Search for Users's Repositories"}
				/>
				{userInfo.repositories.isFetching ? (
					<CircularProgress />
				) : (
					<Grid container direction={'column'} mt={2} mb={2}>
						{filteredWords.map((item) => {
							return (
								<Grid sx={{ padding: '8px', bgcolor: 'whitesmoke', borderBottom: '1px solid grey' }} item key={item.id}>
									<CardActionArea
										sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
										href={`${item.html_url}`}
										target="_blank"
									>
										<Typography variant="h6">{item.name}</Typography>
										<Box>
											<Typography variant="h6">{item.forks_count} Forks</Typography>
											<Typography variant="h6">{item.stargazers_count} Stars</Typography>
										</Box>
									</CardActionArea>
								</Grid>
							);
						})}
					</Grid>
				)}
			</Box>
		);
	} else {
		return <h1>No data :(</h1>;
	}
};

export default UserInfo;
