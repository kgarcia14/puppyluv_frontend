import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'flex',
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
        },
        fontFamily: 'Cabin',
        flexGrow: 1,
        textAlign: 'center',
        paddingTop: '30px',
        paddingBottom: '30px',
        paddingLeft: '40px',
        paddingRight: '40px',
    },
    grid: {
        display: "flex",
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
}));

export default function HowItWorks() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2 className={classes.title}>How It Works</h2>
            <div className={classes.grid}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <h4>Login and Register!</h4>
                    <p>Login the easy way using our safe and secure system. Fill in some basic information and let us, and all the wonderful people out there, WHO YOU ARE and WHO YOUR PET IS.</p>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <h4>Login and Register!</h4>
                    <p>Login the easy way using our safe and secure system. Fill in some basic information and let us, and all the wonderful people out there, WHO YOU ARE.</p>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <h4>Login and Register!</h4>
                    <p>Login the easy way using our safe and secure system. Fill in some basic information and let us, and all the wonderful people out there, WHO YOU ARE.</p>
                    </Paper>
                </Grid>
            </Grid>
            </div>
        </div>
    );
};