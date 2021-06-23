import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import { Link as RouterLink } from 'react-router-dom';

import heroPic from '../assets/AddItemImg.jpg'

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${heroPic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    marginTop: theme.spacing(0),
    padding: theme.spacing(3, 6),
    flexGrow: 1
  },
  noImage: {
    width: '100%',
    height: '100%'
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  }
}));

export default function AddItemPage() {
  const classes = useStyles();

  const uploadedImage = undefined // '/images/uploads/bike1.jpg'

  return (
    <div className={classes.root}>
      <Container component="main" className={classes.container}>
        <Box flexWrap="wrap" flexDirection="row" display="flex" flexGrow="1" justifyContent="center" border="black solid 1px">
          <Box height="400px" minWidth="300px" width="50%" bgcolor="gray">
            {uploadedImage ? <img alt="upload" src={uploadedImage} className={classes.image} /> : <Avatar variant="square" className={classes.noImage}><Button variant="contained" color="primary" onClick={() => { window.alert('Upload photo') }}><CameraAltIcon /><Typography variant="button">Upload</Typography></Button></Avatar>}
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center" height="400px" minWidth="300px" width="50%" bgcolor="white" p={3}>
            <Typography variant="h5">Add Item</Typography>
            <Box p={1} pt={2} width="100%">
              <TextField id="title" label="Title" fullWidth variant="outlined" required />
            </Box>
            <Box p={1} width="100%">
              <TextField id="description" label="Description" fullWidth multiline rows={4} variant="outlined" required />
            </Box>
            <Box p={1} width="100%">
              <TextField id="price" label="Price" type="number" fullWidth variant="outlined" required />
            </Box>
            <Box p={1}>
              <Button variant="contained" color="primary" onClick={() => { window.alert('Publish Item') }}>
                <Typography variant="button">Publish Item</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
