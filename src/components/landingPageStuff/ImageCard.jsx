import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 400,
    display: 'flex',
  },
  title: {
    fontFamily: 'Cabin',
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: '#fff',
    textAlign: 'center',
  },
  desc: {
    fontFamily: 'Cabin',
    fontSize: '1rem',
    color: '#ddd',
    textAlign: 'justify',
  },
});

export default function ImageCard({ info, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={info.imageUrl}
          title="Must Love Dogs"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {info.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {info.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}