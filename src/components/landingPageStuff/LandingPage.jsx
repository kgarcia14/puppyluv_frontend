import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Collapse } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import { Button } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    fontFamily: "Cabin",
    backgroundImage: `url('https://i.pinimg.com/originals/f2/72/fe/f272fe97a657045cabb4dddb911cf4ae.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingLeft: '50px',
    paddingRight: '50px',
    paddingBottom: '80px',
    paddingTop: '80px',
    backgroundPosition: 'center',
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
    whiteSpace: 'pre-wrap',

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
  const { loginWithRedirect } = useAuth0()

  useEffect(() => {
    setChecked(true);
  }, []);

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
          <p>The paw-fect app to bring the only pure souls in this cruel cold world, together.</p>
        <div>
        <Button variant="contained" color="primary" onClick={() => loginWithRedirect()}>
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