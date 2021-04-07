import React from 'react';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import { Route, Link, useParams } from 'react-router-dom'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "block",
        justifyContent: "center",
        flexGrow: 1,
        marginLeft: '30px',
        marginRight: '30px',
        marginBottom: '30px',
        minHeight: '100vh',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const NearbyParksStatic = () => {
    const classes = useStyles();
    const [hplace, setHPlace] = useState('');
    const [hotels, setHotels] = useState([]);

    const _handleSubmit = async (e) => {
        e.preventDefault();
        console.log('hplace:', hplace);
        const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?radius=10000&language=en&type=park&query=parks+in+${hplace}&key=AIzaSyB-fRn8azkVPcHlDIJekteuVleYKApmuFI`
        const submitResponse = await fetch(apiUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .catch((e) => {
                console.log(e);
            });
        console.log("hotel Data is: ", submitResponse);
        setHotels(submitResponse.results);
    }

    const _handleHPlaceChange = (e) => {
        setHPlace(e.target.value);
    }

    return (
        <div className={classes.root}>
            <form noValidate autoComplete="off" onSubmit={_handleSubmit}>
                <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} onChange={_handleHPlaceChange} />
                <Button
                type='submit'>
                    Search
                </Button>
            </form>
            {!!hotels.length ? (
                <>
                    <ul className="Hotel-list">
                        {hotels.map((hotel, index) => (
                            <li key={index}>
                                <Link to={`/hotel/${hotel.name}`}>
                                    <h3>{hotel.name}</h3>
                                </Link>
                                <p>{hotel.formatted_address}</p>
                                <p>Rated at: {hotel.rating} <sup>★'s</sup></p>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>No searches have occurred</p>
            )}
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default NearbyParksStatic;