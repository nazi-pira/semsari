import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

import ItemSearch from '../components/items/ItemSearch';
import ItemCard from '../components/items/ItemCard';

import { getSearchResults } from '../reducers/item.reducer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    wrap: 'wrap',
    padding: '20px',
    marginTop: theme.spacing(1)
  }
}));

function priceRangeText(value) {
  return `${[value]}`;
}

export default function SearchPage() {
  const classes = useStyles();
  const { searchResult } = useSelector((state) => state.item)

  const [category, setCategory] = React.useState('');
  const [city, setCity] = React.useState('');
  const [priceRange, setPriceRange] = React.useState([0, 5000]);

  const query = {
    minPrice: priceRange[0],
    maxPrice: priceRange[1],
    ...category && { category },
    ...city && { city }
  }

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(getSearchResults(query))
  }

  const marks = [
    {
      value: 0,
      label: '0'
    },
    {
      value: 2500,
      label: '2500'
    },
    {
      value: 5000,
      label: '5000'
    }
  ];

  return (
    <div className={classes.root}>
      <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={3} justify="center">
          <Grid item xs={12} sm={12} md={3} lg={2} />
            {/* main grid column! */}
            <Grid item xs={12} sm={10} md={9} lg={10}>
              <ItemSearch query={query} />
            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={2}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={5} md={12} lg={12}>
              <FormControl variant="filled" fullWidth className={classes.formControl}>
                <InputLabel id="category">Category</InputLabel>
                  <Select
                    labelId="category"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    <MenuItem value={false}> <em>All</em></MenuItem>
                    <MenuItem selected value="books">Books</MenuItem>
                    <MenuItem value="home">Home</MenuItem>
                    <MenuItem value="clothing">Clothing</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={5} md={12} lg={12}>
              <FormControl variant="filled" fullWidth className={classes.formControl}>
                <InputLabel id="city">City</InputLabel>
                  <Select
                    labelId="city"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}>
                    <MenuItem value={false}> <em>All</em></MenuItem>
                    <MenuItem value="stockholm">Stockholm</MenuItem>
                    <MenuItem value="göteborg">Göteborg</MenuItem>
                    <MenuItem value="malmö">Malmö</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            <Grid item xs={11} sm={7} md={11} lg={11}>
              <FormControl variant="filled" fullWidth className={classes.formControl}>
                <Typography id="price-slider" gutterBottom>
                  Price
                </Typography>
                <Slider
                  value={priceRange}
                  onChange={(_e, newValue) => setPriceRange(newValue)}
                  valueLabelDisplay="auto"
                  aria-labelledby="price-slider"
                  step={10}
                  min={0}
                  marks={marks}
                  max={5000}
                  getAriaValueText={priceRangeText} />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={12}>
              <Button variant="outlined" fullWidth color="primary" onClick={handleClick}>
                Search Semsari
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <br />
            <hr />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={10}>
          <Grid container spacing={2} justify="center">
            {searchResult?.map((item) => {
              return (
                <Grid item key={item._id} xs={12} sm={6} md={4} lg={3}>
                  <Grid container justify="center">
                    <ItemCard item={item} />
                  </Grid>
                </Grid>)
            })}
          </Grid>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}
