/* eslint-disable no-alert */
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ValidatorForm } from 'react-material-ui-form-validator';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';

import UploadButton from '../components/buttons/UploadButton';
import backgroundImage from '../assets/AddItemImg.jpg';

import { createItem } from '../reducers/item.reducer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: 'black',
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
  const dispatch = useDispatch();
  const uploadedImage = undefined // '/images/uploads/bike1.jpg'

  const { user } = useSelector((state) => state.user)
  const [title, setTitle] = React.useState(null)
  const [description, setDescription] = React.useState(null)
  const [price, setPrice] = React.useState(null)

  const handleSubmit = () => {
    dispatch(createItem({ title, description, price, user }))
  }

  return (
    <div className={classes.root}>
      <Container component="main" className={classes.container}>
        <ValidatorForm onSubmit={handleSubmit}>
          <Box flexWrap="wrap" flexDirection="row" display="flex" flexGrow="1" justifyContent="center" border="black solid 1px">
            <Box height="400px" minWidth="300px" width="50%" bgcolor="gray">
              {uploadedImage ? <img alt="upload" src={uploadedImage} className={classes.image} /> : <Avatar variant="square" className={classes.noImage}><UploadButton /></Avatar>}
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" height="400px" minWidth="300px" width="50%" bgcolor="white" p={3}>
              <Typography variant="h5">Add Item</Typography>
              <Box p={1} pt={2} width="100%">
                <TextField id="title" label="Title" fullWidth variant="outlined" required onChange={(e) => setTitle(e.target.value)} />
              </Box>
              <Box p={1} width="100%">
                <TextField id="description" label="Description" fullWidth multiline rows={4} variant="outlined" required onChange={(e) => setDescription(e.target.value)} />
              </Box>
              <Box p={1} width="100%">
                <TextField id="price" label="Price" type="number" fullWidth variant="outlined" required onChange={(e) => setPrice(e.target.value)} />
              </Box>
              <Box p={1}>
                <Button type="submit" variant="contained" color="primary">
                  <Typography variant="button">Publish Item</Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </ValidatorForm>
      </Container>
    </div>
  );
}
