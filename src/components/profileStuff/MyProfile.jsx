import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ProfPhotoUpload from '../profPhotoStuff/ProfPhotoUpload';
import ProfImage from '../profPhotoStuff/ProfImage';
import PetPhotoUpload from '../petPhotoStuff/PetPhotoUpload';
import PetImageGrid from '../petPhotoStuff/PetImageGrid';
import PhotoModal from '../petPhotoStuff/PhotoModal';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Cabin",
        textAlign: "center",
        backgroundColor: "pink",
        marginBottom: "30px",
        marginTop: "30px",
        paddingBottom: '30px',
        minHeight: '100vh',
    },
    boot: {
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
        minHeight: '80vh',
    },
    header: {
        paddingTop: "30px",
        marginLeft: '30px',
        marginRight: '30px',
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
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

const MyProfile = ({ handleReload, reload }) => {
    const classes = useStyles();
    const { user } = useAuth0();
    const [selectedImg, setSelectedImg] = useState(null);
    const [uniqueId, setUniqueId] = useState([]);

    useEffect(() => {
        (async () => {
            const apiUrl = `http://127.0.0.1:3333/users/${user.sub}`;
            const usersData = await fetch(apiUrl).then((response) => response.json());
            setUniqueId(usersData);
        })();
    }, [user.sub, reload]);

    //delete pets

    //editing page

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Grid className={classes.pic}>
                    <Grid item xs>
                        <ProfImage setSelectedImg={setSelectedImg} />
                    </Grid>
                </Grid>
                <h2>{uniqueId.first_name} {uniqueId.last_name}</h2>
                <p>{uniqueId.age} {uniqueId.gender}, {uniqueId.city}</p>
                <p>{uniqueId.about_us}</p>
            </div>
            <h3>My Pets</h3>
            <div className={classes.boot}>
            <PetImageGrid setSelectedImg={setSelectedImg} />
            { selectedImg && <PhotoModal setSelectedImg={setSelectedImg} selectedImg={selectedImg} /> }
            <div className={classes.profile}>
                {uniqueId.numb_pets === 1 &&(
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <h4>{uniqueId.pet_name1}</h4>
                                <p>{uniqueId.pet_breed1}, {uniqueId.pet_age1} yrs old</p>
                                <p>{uniqueId.pet_personality1}</p>
                            </Paper>
                        </Grid>
                    </Grid>
                )}

                    {uniqueId.numb_pets === 2 && (
                        <>
                            <Grid container spacing={3}>
                                <Grid item xs>
                                    <Paper className={classes.paper}>
                                        <h4>{uniqueId.pet_name1}</h4>
                                        <p>{uniqueId.pet_breed1}, {uniqueId.pet_age1} yrs old</p>
                                        <p>{uniqueId.pet_personality1}</p>
                                    </Paper>
                                </Grid>
                                <Grid item xs>
                                    <Paper className={classes.paper}>
                                        <h4>{uniqueId.pet_name2}</h4>
                                        <p>{uniqueId.pet_breed2}, {uniqueId.pet_age2} yrs old</p>
                                        <p>{uniqueId.pet_personality2}</p>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </>
                    )}
                    
                    {uniqueId.numb_pets === 3 && (
                        <>
                            <Grid container spacing={3}>
                                <Grid item xs>
                                    <Paper className={classes.paper}>
                                        <h4>{uniqueId.pet_name1}</h4>
                                        <p>{uniqueId.pet_breed1}, {uniqueId.pet_age1} yrs old</p>
                                        <p>{uniqueId.pet_personality1}</p>
                                    </Paper>
                                </Grid>
                                <Grid item xs>
                                    <Paper className={classes.paper}>
                                        <h4>{uniqueId.pet_name2}</h4>
                                        <p>{uniqueId.pet_breed2}, {uniqueId.pet_age2} yrs old</p>
                                        <p>{uniqueId.pet_personality2}</p>
                                    </Paper>
                                </Grid>
                                <Grid item xs>
                                    <Paper className={classes.paper}>
                                        <h4>{uniqueId.pet_name3}</h4>
                                        <p>{uniqueId.pet_breed3}, {uniqueId.pet_age3} yrs old</p>
                                        <p>{uniqueId.pet_personality3}</p>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </>
                    )}
            </div>
            </div>
        </div>
    );
};

export default MyProfile;
