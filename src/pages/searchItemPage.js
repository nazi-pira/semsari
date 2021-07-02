import React from 'react';
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

import ItemSearch from '../components/ItemSearch';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
    flexGrow: 1
  }
}));

function valuetext(value) {
  return `${value}°C`;
}

export default function SearchItemPage() {
  const classes = useStyles();
  const [item, setItem] = React.useState('');
  const [value, setValue] = React.useState([50, 5000]);

  const handleChange = (event) => {
    setItem(event.target.value);
  };
  const handleSlide = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={8} alignContent="center">
          <ItemSearch />
        </Grid>
        <Box className="filter">
          <Grid item xs={6} sm={3}>
            <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={item}
            onChange={handleChange}>
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={10}>Book</MenuItem>
            <MenuItem value={20}>Home</MenuItem>
            <MenuItem value={30}>Clothing</MenuItem>
          </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={item}
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
          <Grid item xs={6} sm={3}>
            <div className={classes.root}>
        <Typography id="range-slider" gutterBottom>
          Price
        </Typography>
        <Slider
          value={value}
          onChange={handleSlide}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext} />
            </div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button variant="outlined" color="secondary">
            Search Semsari
            </Button>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
}
