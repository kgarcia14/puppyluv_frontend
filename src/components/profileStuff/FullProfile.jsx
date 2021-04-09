import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import OthersProfImage from '../profPhotoStuff/OthersProfImage';
import OtherPetImgGrid from '../petPhotoStuff/OtherPetImgGrid';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Cabin",
        textAlign: "center",
        backgroundColor: "pink",
        marginLeft: "30px",
        marginRight: "30px",
        marginBottom: "30px",
        marginTop: "30px",
        paddingBottom: '30px',
        minHeight: '80vh',
    },
    header: {
        paddingTop: "30px",
    },
    profile: {
        flexGrow: 1,
        paddingLeft: '50px',
        paddingRight: '50px',
        display: 'flex',
        marginRight: '30px',
        marginLeft: '30px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        border: '2px #e75480 solid',
    },
}));


const FullProfile = () => {
    const classes = useStyles();
    const [fullProfile, setFullProfile] = useState([]);
    const {otherUserId} = useParams();
    console.log(otherUserId);

    useEffect(() => {
        (async () => {
            const apiUrl = `http://127.0.0.1:3333/user_id/${otherUserId}`;
            const fullProfileData = await fetch(apiUrl).then(response => response.json());
            setFullProfile(fullProfileData)
        })();
    },[otherUserId])

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <OthersProfImage fullProfile={fullProfile} />
                <h2>
                    {fullProfile.first_name} {fullProfile.last_name}
                </h2>
                <p>
                    {fullProfile.age} {fullProfile.gender}, {fullProfile.city}
                </p>
                <p>{fullProfile.about_us}</p>
            </div>
            <h4>My Pets</h4>
            <OtherPetImgGrid fullProfile={fullProfile} />
            <div className={classes.profile}>
            {fullProfile.numb_pets === 1 && (
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <h4>{fullProfile.pet_name1}</h4>
                            <p>{fullProfile.pet_breed1}, {fullProfile.pet_age1}</p>
                            <p>{fullProfile.pet_personality1}</p>
                        </Paper>
                    </Grid>
                </Grid>
            )}

            {fullProfile.numb_pets === 2 && (
                <>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <h4>{fullProfile.pet_name1}</h4>
                                <p>{fullProfile.pet_breed1}, {fullProfile.pet_age1}</p>
                                <p>{fullProfile.pet_personality1}</p>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <h4>{fullProfile.pet_name2}</h4>
                                <p>{fullProfile.pet_breed2}, {fullProfile.pet_age2}</p>
                                <p>{fullProfile.pet_personality2}</p>
                            </Paper>
                        </Grid>
                    </Grid>
                </>
            )}

            {fullProfile.numb_pets === 3 && (
                <>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <h4>{fullProfile.pet_name1}</h4>
                            <p>{fullProfile.pet_breed1}, {fullProfile.pet_age1}</p>
                            <p>{fullProfile.pet_personality1}</p>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <h4>{fullProfile.pet_name2}</h4>
                            <p>{fullProfile.pet_breed2}, {fullProfile.pet_age2}</p>
                            <p>{fullProfile.pet_personality2}</p>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <h4>{fullProfile.pet_name3}</h4>
                            <p>{fullProfile.pet_breed3}, {fullProfile.pet_age3}</p>
                            <p>{fullProfile.pet_personality3}</p>
                        </Paper>
                    </Grid>
                </Grid>
                </>
            )}
            </div>
        </div>
    )
}

export default FullProfile;