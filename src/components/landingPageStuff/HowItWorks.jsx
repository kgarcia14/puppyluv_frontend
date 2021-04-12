import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import FaceIcon from '@material-ui/icons/Face';
import SearchIcon from '@material-ui/icons/Search';
import ForumIcon from '@material-ui/icons/Forum';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'flex',
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
        },
        fontFamily: 'Cabin',
        flexGrow: 1,
        textAlign: 'center',
        paddingTop: '30px',
        paddingLeft: '50px',
        paddingRight: '50px',
        paddingBottom: '30px',
    },
    grid: {
        display: "flex",
        paddingBottom: '30px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        fontFamily: 'Prata',
        paddingBottom: '20px',
    },
    number: {
        color: '#FF69B4',
    },
}));

export default function HowItWorks() {
    const classes = useStyles();
    const { loginWithRedirect } = useAuth0()

    return (
        <div className={classes.root}>
            <h2 className={classes.title}>How It Works</h2>
            <div className={classes.grid}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <h4>
                    <div>
                    <FaceIcon/>
                    </div>
                    <span className={classes.number}>1. </span><span>Register and Login!</span>
                    </h4>
                    <p>Register and login the easy way using our safe and secure system. Fill in some basic information and let us know WHO YOU ARE and WHO YOUR PET IS.</p>
                    </Paper>
                </Grid>
                <Grid item xs>
                <Paper className={classes.paper}>
                    <h4>
                    <div>
                    <SearchIcon/>
                    </div>
                    <span className={classes.number}>2. </span><span>Search and Select!</span>
                    </h4>
                    <p>Search for other people and pets using our DYNAMIC and DIGITAL filtering system to find the PAW-FECT partner for YOU. You are in for a TREAT.</p>
                    </Paper>
                </Grid>
                <Grid item xs>
                <Paper className={classes.paper}>
                    <h4>
                    <div>
                    <ForumIcon/>
                    </div>
                    <span className={classes.number}>3. </span><span>Connect and Mingle!</span>
                    </h4>
                    <p>CHOOSE your favorite friends and CONNECT - both online, via email, AND offline, by meeting at a local park near YOU. Un-LEASH the mingling BEAST.</p>
                    </Paper>
                </Grid>
            </Grid>
            </div>
            <Button variant="contained" color="primary" onClick={() => loginWithRedirect()}>
            Let's Get Started
            </Button>
        </div>
    );
};