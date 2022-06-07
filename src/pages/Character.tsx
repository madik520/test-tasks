import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { useAppSelector } from '../utils/hooks';
import { RootState } from '../store/store';


const Character = () => {
  const selectChar = useAppSelector((state: RootState) => state.characters.selectedCharacter);

  return (
    <Box sx={{ 
      display: 'flex',
      justifyContent: 'center'
     }}>
      <List>
        <ListItem>
          <Typography sx={{ fontWeight: 'bold' }} variant='h6'>Name: <Typography variant='body1' component={'span'}>{selectChar?.name}</Typography></Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography sx={{ fontWeight: 'bold' }} variant='h6'>Species: <Typography variant='body1' component={'span'}>{selectChar?.species}</Typography></Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography sx={{ fontWeight: 'bold' }} variant='h6'>Gender: <Typography variant='body1' component={'span'}>{selectChar?.gender}</Typography></Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography sx={{ fontWeight: 'bold' }} variant='h6'>Location: <Typography variant='body1' component={'span'}>{selectChar?.location.name}</Typography></Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography sx={{ fontWeight: 'bold' }} variant='h6'>Episode: <Typography variant='body1' component={'span'}>
            { selectChar?.episode.slice(0,3).map((i) => `${i} `) }
          </Typography></Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography sx={{ fontWeight: 'bold' }} variant='h6'>Status: <Typography variant='body1' component={'span'}>{selectChar?.status}</Typography></Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <Typography sx={{ fontWeight: 'bold' }} variant='h6'>Created: <Typography variant='body1' component={'span'}>{selectChar?.created}</Typography></Typography>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );
};

export default Character;