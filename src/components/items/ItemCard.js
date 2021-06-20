/* eslint-disable no-console */
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

import { Link as RouterLink } from 'react-router-dom';

import * as moment from 'moment'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  cardActions: {
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'space-between'
  },
  cardHeader: {
    padding: theme.spacing(2),
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'start'
  },
  cardHeaderAvatar: {
    marginRight: theme.spacing(2)
  },
  cardHeaderTitleGroup: {
    flex: '1 1 auto'
  },
  cardHeaderTitle: {
    display: 'table',
    tableLayout: 'fixed',
    width: '100%'
  },
  cardHeaderTextCell: {
    display: 'table-cell',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: 'inherit'
  }
}));

export default function ItemCard(params) {
  const classes = useStyles();

  const { item } = params
  const acronym = item.user.name[0].toUpperCase()

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9'
    }
  }))(Tooltip);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={item.user.image} className={classes.avatar}>
            {acronym}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
        <HtmlTooltip
          title={item.title}>
          <div className={classes.cardHeaderTitle}>
            <div className={classes.cardHeaderTextCell}>{item.title}</div>
          </div>
        </HtmlTooltip>
        }
        subheader={moment(item.created, 'YYYYMMDD').fromNow()} />
      <CardMedia
        className={classes.media}
        image={item.images[0]}
        title="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <div>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon /> {item.rating}
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </div>
        <Button size="small" variant="outlined" color="primary" component={RouterLink} to={`/item/view/${item._id}`}>
            View
        </Button>
      </CardActions>
    </Card>
  );
}
