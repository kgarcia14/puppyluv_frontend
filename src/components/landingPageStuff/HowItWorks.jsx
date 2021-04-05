import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'flex',
        maxHeight: "500vh",
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
    const { loginWithRedirect, isAuthenticated } = useAuth0()

    return (
        <div className={classes.root}>
            <h2 className={classes.title}>How It Works</h2>
            <div className={classes.grid}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <h4>
                    <span className={classes.number}>1. </span><span>Login and Register!</span>
                    </h4>
                    <p>Login the easy way using our safe and secure system. Fill in some basic information and let us, and all the wonderful people out there, WHO YOU ARE and WHO YOUR PET IS.</p>
                    </Paper>
                </Grid>
                <Grid item xs>
                <Paper className={classes.paper}>
                    <h4>
                    <span className={classes.number}>2. </span><span>Search and Select!</span>
                    </h4>
                    <p>Login the easy way using our safe and secure system. Fill in some basic information and let us, and all the wonderful people out there, WHO YOU ARE and WHO YOUR PET IS.</p>
                    </Paper>
                </Grid>
                <Grid item xs>
                <Paper className={classes.paper}>
                    <h4>
                    <span className={classes.number}>3. </span><span>Match and Mingle!</span>
                    </h4>
                    <p>Login the easy way using our safe and secure system. Fill in some basic information and let us, and all the wonderful people out there, WHO YOU ARE and WHO YOUR PET IS.</p>
                    </Paper>
                </Grid>
            </Grid>
            </div>
            <Button variant="contained" color="primary" onClick={() => loginWithRedirect()}>
            Lets Get Started
            </Button>
        </div>
    );
};