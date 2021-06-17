/* eslint-disable no-unused-vars */
import React from 'react';
// import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ProductCard from '../product/ProductCard';

const useStyles = makeStyles((theme) => ({
  carousel: {
  },
  item: {
    image: {
      height: '20px'
    }
  }
}))

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function ProductCarousel(props) {
  const { products } = props
  return (
    <Carousel
      responsive={responsive}
      showDots
      infinite>
      {
        products.map((product) => {
          return (
            <ProductCard key={product._id} product={product} />
          )
        })
      }
    </Carousel>
  )
}

// export default function ProductCarousel(_props) {
//   return (
//     <Carousel
//       animation="slide"
//       navButtonsAlwaysVisible="true">
//       {
//         products.map((product, index) => {
//           const positions = [index - 1, index, index + 1]

//           if (index === 0) {
//             positions[0] = products.length - 1
//           } else if (index === products.length - 1) {
//             positions[2] = 0
//           }
//           return (
//             <Grid key={products[index]._id} container justify="space-evenly">
//               <ProductCard key={product._id} product={products[positions[0]]} />
//               <ProductCard key={product._id} product={products[positions[1]]} />
//               <ProductCard key={product._id} product={products[positions[2]]} />
//             </Grid>
//           )
//         })
//       }
//     </Carousel>
//   )
// }