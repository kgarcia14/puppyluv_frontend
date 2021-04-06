import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { pink, blue, deepPurple } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Styled from 'styled-components';


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

const UserThumbCard = ({ allUser, handleOtherUserId }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [liked_users, setLikedUsers] = useState("");
  console.log(allUser.user_nickname);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleMenuClick = async (event) => {
    event.preventDefault();
    setShowMenu(!showMenu);
    console.log(allUser.user_nickname);
  }

  //ADD FAVORITES
  const _handleSubmitFavorites = async (e) => {
    e.preventDefault();
    const apiUrl = 'http://127.0.0.1:3333/favorites/add';
    const submitResponse = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ liked_users })
    }).then((response) => response);
    console.log("FAVORITES IS ADDING WOOHOO: ", submitResponse)

    if (submitResponse.status === 200) {
        console.log("submit response is 200")
        
    }
  }
  //

  return (
    <Card className={classes.root}>
        {allUser.gender === 'male' && (
            <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatarM}>
                {allUser.user_img}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings" onClick={handleMenuClick}>
                <MoreVertIcon/>
              </IconButton>
            }
            title={allUser.first_name} 
            subheader={allUser.last_name}
          />
        )}
        {allUser.gender === 'female' && (
            <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatarF}>
                {allUser.user_img}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings" onClick={handleMenuClick}>
                <MoreVertIcon />
              </IconButton>
            }
            title={allUser.first_name} 
            subheader={allUser.last_name}
          />
        )}
        {allUser.gender === 'other' && (
            <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatarO}>
                {allUser.user_img}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings" onClick={handleMenuClick}>
                <MoreVertIcon />
              </IconButton>
            }
            title={allUser.first_name} 
            subheader={allUser.last_name}
          />
        )}
        {showMenu && (
          <Link to={`/full_profile/${allUser.id}`} style={{paddingLeft: 12, textDecoration: 'none', color: '#3f51b5'}}>View Full Profile</Link>
        )
        }
        

      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={_handleSubmitFavorites}/>
        </IconButton>
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
          <Typography paragraph>{allUser.about_us}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default UserThumbCard;