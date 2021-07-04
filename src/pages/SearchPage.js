import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import ItemSearch from '../components/items/ItemSearch';
import ItemCard from '../components/items/ItemCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    wrap: 'wrap',
    padding: '20px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  slider: {
    width: 300
  },
  filter: {
    height: '100%',
    marginTop: theme.spacing(0),
    padding: theme.spacing(6, 6),
    flexGrow: 1,
    alignContent: 'center',
    alignItems: 'center',
    direction: 'center'
  }
}));

function valuetext(value) {
  return `${[value]}`;
}

export default function SearchItemPage() {
  const classes = useStyles();
  const [something, setSomething] = React.useState('');
  const [value, setValue] = React.useState([0, 5000]);
  const { searchResult } = useSelector((state) => state.item)

  const handleChange = (event) => {
    setSomething(event.target.value);
  };
  const handleSlide = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={9} xs={12}>
        <Grid item xs={12} alignContent="center">
          <ItemSearch />
          <Box className="filter">
            <Grid item xs={6} sm={2}>
              <FormControl variant="filled" fullWidth className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={something}
                  onChange={handleChange}>
                  <MenuItem value=""> <em>All</em></MenuItem>
                  <MenuItem value={10}>Book</MenuItem>
                  <MenuItem value={20}>Home</MenuItem>
                  <MenuItem value={30}>Clothing</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={2}>
              <FormControl variant="filled" fullWidth className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">City</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={something}
                    onChange={handleChange}>
                    <MenuItem value="">
                      <em>All</em>
                    </MenuItem>
                    <MenuItem value={10}>Stockholm</MenuItem>
                    <MenuItem value={20}>Götenberg</MenuItem>
                    <MenuItem value={30}>Malmö</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={2}>
                <Typography id="range-slider" gutterBottom>
                  Price
                </Typography>
                <Slider
                  value={value}
                  max="900"
                  onChange={handleSlide}
                  fullWidth
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  getAriaValueText={valuetext} />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Button variant="outlined" color="secondary">
              Search Semsari
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={1} xs={12} justify="center">
        {searchResult?.map((item) => {
          return (
            <Grid item>
              <ItemCard item={item} />
            </Grid>)
        })}
      </Grid>
    </div>
  );
}
