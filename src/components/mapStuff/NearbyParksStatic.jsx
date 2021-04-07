import React from 'react';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "block",
        justifyContent: "center",
        flexGrow: 1,
        paddingLeft: '30px',
        paddingRight: '30px',
        paddingBottom: '30px',
        paddingTop: '30px',
        minHeight: '100vh',
        textAlign: 'center',
        fontFamily: 'cabin',
        backgroundImage: `url('https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=60')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    form: {
        justifyContent: 'center',
        textAlign: 'center',
    },
    card: {
        padding: theme.spacing(2),
        backgroundColor: '#45b6fe',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
        paddingTop: '30px',
    },
    media: {
        height: 140,
    },
    search: {
        marginTop: '30px',
    },
}));

const NearbyParksStatic = () => {
    const classes = useStyles();
    const [pplace, setPPlace] = useState('');
    const [parks, setParks] = useState([]);

    const _handleSubmit = async (e) => {
        e.preventDefault();
        console.log('pplace:', pplace);
        const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?radius=10000&language=en&type=park&query=parks+in+${pplace}&key=AIzaSyB-fRn8azkVPcHlDIJekteuVleYKApmuFI`
        const submitResponse = await fetch(apiUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .catch((e) => {
                console.log(e);
            });
        console.log("park data is: ", submitResponse);
        setParks(submitResponse.results);
    }

    const _handlePPlaceChange = (e) => {
        setPPlace(e.target.value);
    }

    return (
        <div className={classes.root}>
            <h2>Search for a Park to Meet and Mingle!</h2>
            <form noValidate autoComplete="off" onSubmit={_handleSubmit} className={classes.form}>
                <Input placeholder="Location or Zip Code" inputProps={{ 'aria-label': 'description' }} onChange={_handlePPlaceChange} />
                <Button size="small" variant="outlined" color="primary" type='submit'>Search</Button>
            </form>
            <div className={classes.search}>
            {!!parks.length ? (
                <Card className={classes.card}>
                        {parks.map((park, index) => (
                            <Paper className={classes.paper} xs key={index}>
                                <CardMedia
                                className={classes.media}
                                image={park.photos}
                                title="Paella dish"
                                />
                                <CardContent/>
                                <h4>{park.name}</h4>
                                <p>{park.formatted_address}</p>
                                <p>Rated at: {park.rating} <sup>★'s</sup></p>
                                <CardContent/>
                            </Paper>
                        ))}
                </Card>
            ) : (
                <p>Come on human! Let's hurry and play!</p>
            )}

            </div>
        </div>
    );
};

export default NearbyParksStatic;