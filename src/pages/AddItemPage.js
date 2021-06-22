import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';

import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(0),
    padding: theme.spacing(3, 6),
    flexGrow: 1
  }
}));

export default function AddItemPage() {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.container}>
      <Box bgcolor="green">
        <Box flexWrap="nowrap" flexDirection="row" display="flex">
          <Box height="400px" width="50%" bgcolor="#fff">
              <img alt="upload" />
          </Box>
          <Box display="flex" height="400px" width="50%" bgcolor="red">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
              variant="outlined" />
          </Box>
        </Box>
        <Box flexWrap="nowrap" flexDirection="row" display="flex">
          <Box width="50%" bgcolor="lightblue">
            <Button variant="contained" color="primary" onClick={() => { window.alert('Upload photo') }}><Typography variant="button">Upload photo</Typography></Button>
          </Box>
          <Box width="50%" bgcolor="pink">
          <Button variant="contained" color="primary" onClick={() => { window.alert('Publish Item') }}><Typography variant="button">Publish Item</Typography></Button>
          </Box>
        </Box>

        {/* <Box container diretion="row" justify="space-between">
          <Box item alignItems="flex-end" alignContent="flex-end" style={{ backgroundColor: 'yellow' }} xs={8}>
            xxzx
          </Box>
          <Box item alignItems="flex-end" alignContent="flex-end" style={{ backgroundColor: 'purple' }}>
            <Button component={RouterLink} variant="contained" color="primary" to="/item/add"><Typography variant="button">Add Item</Typography></Button>
          </Box>
        </Box> */}
      </Box>

      {/* <Grid container direction="column" sm={12} alignItems="space-between" justify="space-between" alightContent="space-between" style={{ height: 400 }}>
        <Grid container direction="row" alignItems="stretch" justify="center">
          <Grid item style={{ backgroundColor: 'red' }} xs={8} justify="stretch">
            <img alt="upload" />
          </Grid>
          <Grid item style={{ backgroundColor: 'blue' }} xs={4} justify="stretch">
            2
          </Grid>
        </Grid>
        <Grid container diretion="row" justify="space-between">
          <Grid item alignItems="flex-end" alignContent="flex-end" style={{ backgroundColor: 'yellow' }} xs={8}>
            xxzx
          </Grid>
          <Grid item alignItems="flex-end" alignContent="flex-end" style={{ backgroundColor: 'purple' }}>
            <Button component={RouterLink} variant="contained" color="primary" to="/item/add"><Typography variant="button">Add Item</Typography></Button>
          </Grid>
        </Grid>
      </Grid> */}

    </Container>
  );
}
