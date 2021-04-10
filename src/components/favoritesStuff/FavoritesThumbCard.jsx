import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { pink, blue, deepPurple } from '@material-ui/core/colors';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoritesThumbPhoto from './FavoritesThumbPhoto';


const useStyles = makeStyles((theme) => ({
    root: {
    maxWidth: 500,
    },
    media: {
      height: 0,
      paddingTop: '20.8%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatarM: {
      backgroundColor: blue[500],
    },
    avatarF: {
        backgroundColor: pink[500], 
    },
    avatarO: {
        backgroundColor: deepPurple[500],
    },
  }));

const FavoritesThumbCard = ({ favorite }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleMenuClick = async (event) => {
    event.preventDefault();
    setShowMenu(!showMenu);
    console.log(favorite.user_nickname);
  };

  return (
    <Card className={classes.root}>
        {favorite.gender === 'male' && (
            <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatarM}>
                {favorite.user_img}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings" onClick={handleMenuClick}>
                <MoreVertIcon/>
              </IconButton>
            }
            title={favorite.first_name} 
            subheader={favorite.last_name}
          />
        )}
        {favorite.gender === 'female' && (
            <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatarF}>
                {favorite.user_img}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings" onClick={handleMenuClick}>
                <MoreVertIcon />
              </IconButton>
            }
            title={favorite.first_name} 
            subheader={favorite.last_name}
          />
        )}
        {favorite.gender === 'other' && (
            <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatarO}>
                {favorite.user_img}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings" onClick={handleMenuClick}>
                <MoreVertIcon />
              </IconButton>
            }
            title={favorite.first_name} 
            subheader={favorite.last_name}
          />
        )}
        {showMenu && (
          <Link to={`/full_profile/${favorite.id}`} style={{paddingLeft: 12, textDecoration: 'none', color: '#3f51b5'}}>View Full Profile</Link>
        )}
      <CardContent>
        <FavoritesThumbPhoto favorite={favorite} />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="start a chat">
          <QuestionAnswerRoundedIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{favorite.about_us}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default FavoritesThumbCard;