import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  },
  noImage: {
    width: '100%',
    height: '100%'
  }
}));

export default function ItemDetail({ item }) {
  const classes = useStyles();

  return (
    <Box flexWrap="wrap" flexDirection="row" display="flex" justifyContent="center" border="black solid 1px">
      <Box height="400px" minWidth="300px" width="50%" bgcolor="gray" display="flex" alignItems="center" justifyContent="center">
        {item.images[0] ? <img className={classes.image} alt="upload" src={item.images[0]} /> : <Avatar variant="square" className={classes.noImage}><CameraAltIcon /> No Image <Typography variant="button">Upload</Typography></Avatar>}
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" height="400px" minWidth="300px" width="50%" bgcolor="#ffff" p={3}>
        <Typography variant="h5">Add Item</Typography>
        <Box p={1} pt={2} width="100%">
          <TextField id="title" label="Title" fullWidth variant="outlined" required />
        </Box>
        <Box p={1} width="100%">
          <TextField id="description" label="Description" fullWidth multiline rows={4} variant="outlined" required />
        </Box>
        <Box p={1} width="100%">
          <div> {item.price} </div>
        </Box>
        <Box p={1}>
          <Button variant="contained" color="primary" onClick={() => { window.alert('Contact') }}>
            <Typography variant="button">Contact</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
