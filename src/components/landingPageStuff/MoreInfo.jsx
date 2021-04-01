import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import info from "../../static/info";
import useWindowPosition from "../../hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

export default function MoreInfo() {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="more-info">
      <ImageCard info={info[0]} checked={checked} />
      <ImageCard info={info[1]} checked={checked} />
      <ImageCard info={info[2]} checked={checked} />
    </div>
  );
};