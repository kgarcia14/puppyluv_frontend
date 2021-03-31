import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import { Button } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import { Typography, Switch, FormControlLabel, FormGroup, MenuItem, Menu, Link } from "@material-ui/core";
import { MenuIcon, AccountCircle } from '@material-ui/icons/Sort';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Cabin",
  },
  appbar: {
    background: 'none',
    color: "#000000",
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
    color: "#000000",
  },
  icon: {
    color: "#000000",
    fontSize: "2rem",
  },
  puppy: {
    fontFamily: "Fredoka One",
  },
  colorText: {
    color: "#FF69B4",
    fontFamily: "Fredoka One",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#000000",
    fontSize: "4.5rem",
    fontFamily: "Nunito",
  },
  goDown: {
    color: "#FF69B4",
    fontSize: "4rem",
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const [anchorEl, setAnchorEl] = React.useState(null);


  useEffect(() => {
    setChecked(true);
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
};

const handleClose = () => {
    setAnchorEl(null);
};

  return (
    <div className={classes.root} id="header">
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            <span className={classes.puppy}>Puppy</span><span className={classes.colorText}>Luv.</span>
          </h1>
          <p>The paw-fect dating app to bring the only pure souls in this cruel cold world, together.</p>
        <div>
        <Button variant="contained" color="primary" href="#contained-buttons">
        Join PuppyLuv
        </Button>
        </div>
        <Scroll to="more-info" smooth={true}>
          <IconButton>
            <ExpandMoreIcon className={classes.goDown} />
          </IconButton>
        </Scroll>
        </div>
      </Collapse>
    </div>
  );
}