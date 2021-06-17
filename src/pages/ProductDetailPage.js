import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    marginTop: theme.spacing(0),
    padding: theme.spacing(6, 6),
    flexGrow: 1
  }
}))

export default function ProductDetailPage() {
  const classes = useStyles();

  const { productId } = useParams();
  // fetch product by productId

  return (
    <Container maxWidth="sm" component="main" className={classes.container}>
      Product Detail Page
      <div> {productId} </div>
    </Container>
  );
}
