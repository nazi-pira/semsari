/* eslint-disable no-console */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import * as moment from 'moment';

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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';

import noImage from '../../assets/no-image.jpg'

import { getImageUrl } from '../../helpers/request'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    border: 'black solid 1px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  },
  cardContent: {
    height: 60
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
  overflow: {
    display: 'table',
    tableLayout: 'fixed',
    width: '100%'
  },
  singleLineOverflow: {
    display: 'table-cell',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  multiLineOverflow: {
    display: 'box',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'wrap',
    lineClamp: 3,
    boxOrient: 'vertical'
  },
  cardActions: {
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'space-between'
  }
}));

export default function ItemCard({ item, userId }) {
  const classes = useStyles();

  const acronym = item.user.name[0].toUpperCase()
  const itemImage = item?.images.length > 0 ? getImageUrl(item.images[0]) : noImage

  const canEdit = item.user._id === userId

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9'
    }
  }))(Tooltip);

  const profileImage = item.user.image ? getImageUrl(item.user.image) : null

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={profileImage} className={classes.avatar}>
            {acronym}
          </Avatar>
        }
        action={
          canEdit ? <IconButton aria-label="settings"><MoreVertIcon /></IconButton> : <IconButton style={{ marginRight: 20 }} />
        }
        title={
        <HtmlTooltip
          title={item.title}>
          <div className={classes.overflow}>
            <div className={classes.singleLineOverflow}>{item.title}</div>
          </div>
        </HtmlTooltip>
        }
        subheader={moment(item.created, 'YYYYMMDD').fromNow()} />
      <CardMedia
        className={classes.media}
        image={itemImage}
        title={item.title} />
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" color="textSecondary" component="p">
          <span className={classes.overflow}>
            <span className={classes.multiLineOverflow}>{item.description}</span>
          </span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon /> {item.rating}
        </IconButton>
        <div>
          <Typography variant="h6" color="textPrimary"> {item.price} SEK </Typography>
        </div>
        <Button size="small" variant="outlined" color="primary" component={RouterLink} to={`/item/view/${item._id}`}>
            View
        </Button>
      </CardActions>
    </Card>
  );
}
