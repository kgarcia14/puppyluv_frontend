import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import info from "../../static/info";
import useWindowPosition from "../../hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'pink',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    fontFamily: 'Prata',
    flexGrow: 1,
    textAlign: 'center',
    paddingTop: '30px',
  },
  cards: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    justifyContent: "center",
  },
}));

export default function MoreInfo() {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="more-info">
      <h2>Meet the App that has helped millions of souls, connect.</h2>
      <div className={classes.cards}>
      <ImageCard info={info[0]} checked={checked} />
      <ImageCard info={info[1]} checked={checked} />
      <ImageCard info={info[2]} checked={checked} />
      </div>
    </div>
  );
};