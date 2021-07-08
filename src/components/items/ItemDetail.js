/* eslint-disable no-alert */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { getImageUrl } from '../../helpers/request';
import noImage from '../../assets/no-image.jpg';

const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'minmax(350px, 600px)',
    gridTemplateRows: 'auto auto'
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  }
}));

export default function ItemDetail({ item }) {
  const classes = useStyles();
  const primaryImage = item?.images.length > 0 ? getImageUrl(item.images[0]) : noImage
  return (
    <Box container="true" className={classes.root} bgcolor="primary" display="flex" alignItems="center" justifyContent="center" borderRadius="10px">
      <Box width="100%" height="100%" bgcolor="#fff" display="flex" justifyContent="center" alignItems="center">
         <img alt="upload" src={primaryImage} className={classes.image} />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" height="100%" width="100%" bgcolor="#ffff" p={3}>
        <Box p={1} pt={2} width="100%">
          <Typography variant="h5">{item.title}</Typography>
        </Box>
        <Box p={1} borderRadius="10px" width="100%">
          <Typography variant="body1">{item.description}</Typography>
        </Box>
        <Box p={1} borderRadius="10px" width="100%">
          <Typography variant="h6">{item.price} SEK </Typography>
        </Box>
        <Box p={1}>
          <Button variant="contained" color="primary" onClick={() => { window.alert('Publish Item') }}>
            <Typography variant="button">Contact</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
