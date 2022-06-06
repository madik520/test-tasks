import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircularProgress from '@mui/material/CircularProgress';

import { Link } from 'react-router-dom';

import { ICharacterList } from './CharactersList';

const CharactersList = ({ itemData }: ICharacterList) => {
  if(itemData){
    return (
      <Box sx={{ width: '100%', bgcolor: 'whitesmoke', mt: 2 }}>
        <List sx={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
          {itemData.map((item: any) => {
            return <ListItem sx={{ maxWidth: 380 }} key={item.id}>
              <Link style={{ color: 'black', textDecoration: 'none' }} to={`/character-${item.id}`}>
                <ListItemButton>
                  <ListItemAvatar>
                    { item.image.length > 0 
                      ? <Avatar alt={`${item.name}`} src={`${item.image}`} /> 
                      : <AccountCircleIcon />}
                  </ListItemAvatar>
                  <ListItemText sx={{ mr: 1 }} primary={`Name: `} secondary={item.name} primaryTypographyProps={{ fontWeight: 'bold' }} />
                  <ListItemText primary={`Status: `} secondary={item.status} primaryTypographyProps={{ fontWeight: 'bold' }} />
                </ListItemButton>
              </Link>
            </ListItem>
          })}
        </List>
      </Box>
    );
  }else {
    return (
      <Box sx={{ 
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <CircularProgress />
      </Box>
    )
  }
};

export default CharactersList;