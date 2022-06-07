import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../utils/hooks';
import { likeDislike, selectCharacter } from '../actions/actionCreator';

import type { RootState } from '../store/store';

const About = () => {
	const favorData = useAppSelector((state: RootState) => state.characters.favoriteChar);
	const dispatch = useAppDispatch();

	return (
		<Box
			sx={{
				flexGrow: 1,
				display: 'flex',
				flexDirection: { sm: 'row', xs: 'column' },
				justifyContent: { sm: 'flex-start', xs: 'center' },
				alignItems: 'center',
				flexWrap: 'wrap',
				mt: 2,
				mb: 2
			}}
		>
			{favorData.map((i) => {
				return (
					<Card key={i.id} sx={{ mt: 2, mr: { md: 3, sm: 2, xs: 0 }, maxWidth: 325 }}>
						<Link
							onClick={() => dispatch(selectCharacter({ ...i }))}
							style={{ color: 'black', textDecoration: 'none' }}
							to={`/character/${i.id}`}
						>
							<CardActionArea>
								<CardHeader
									avatar={<Avatar aria-label="recipe" src={`${i.image}`} />}
									title={i.name}
									subheader={`Gender: ${i.gender}`}
								/>
							</CardActionArea>
						</Link>
						<Divider />
						<CardActions>
							<Typography color={'GrayText'} variant="body2" component={'span'}>
								Your favor character
							</Typography>
							<IconButton onClick={() => dispatch(likeDislike(i.id, !i.favorite))}>
								<FavoriteIcon sx={{ color: i.favorite ? 'red' : 'primary' }} />
							</IconButton>
						</CardActions>
					</Card>
				);
			})}
		</Box>
	);
};

export default About;
