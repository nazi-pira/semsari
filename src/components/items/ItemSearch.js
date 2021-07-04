import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

import { getSearchResults } from '../../reducers/item.reducer';

const useStyles = makeStyles(() => ({
  inputRoot: {
    color: 'black',
    fontFamily: 'Roboto Mono',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#fff'
    }
  }
}));
export default function ItemSearch() {
  const [search, setSearch] = React.useState(false);
  const dispatch = useDispatch()

  const history = useHistory()

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      dispatch(getSearchResults({ search }))
      history.push('/search')
    }
  }

  const classes = useStyles();
  return (
    <TextField
      label="Search"
      variant="filled"
      fullWidth
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleKey}
      InputProps={{
        className: classes.inputRoot
      }} />
  )
}