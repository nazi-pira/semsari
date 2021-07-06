import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

import { getSearchResults } from '../../reducers/item.reducer';

const useStyles = makeStyles(() => ({
  root: {
    background: '#fff',
    borderRadius: 10
  },
  input: {
    color: 'black',
    fontFamily: 'Roboto Mono'
  }
}));
export default function ItemSearch({ query, send }) {
  const [search, setSearch] = React.useState();
  const dispatch = useDispatch()

  const history = useHistory()

  const handleKey = (event) => {
    if (event.key === 'Enter' || send === true) {
      dispatch(getSearchResults({ ...query, ...search && { search } }))
      if (history?.location?.pathname !== '/search') {
        history.push('/search')
      }
    }
  }

  const classes = useStyles();
  return (
    <TextField
      className={classes.root}
      label="Search"
      variant="filled"
      fullWidth
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleKey}
      InputProps={{
        className: classes.input
      }} />
  )
}