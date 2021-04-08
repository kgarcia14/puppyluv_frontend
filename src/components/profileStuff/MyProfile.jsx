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
        marginLeft: "30px",
        marginRight: "30px",
        marginBottom: "30px",
        marginTop: "30px",
        paddingBottom: '30px',
        minHeight: '100px',
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

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <ProfImage setSelectedImg={setSelectedImg} />
                <h1>
                    {uniqueId.first_name} {uniqueId.last_name}
                </h1>
                <p>
                    {uniqueId.age} {uniqueId.gender} {uniqueId.city}
                </p>
                <p>{uniqueId.about_us}</p>
            </div>
            <h4>My Pets</h4>
            <PetImageGrid setSelectedImg={setSelectedImg} />
            { selectedImg && <PhotoModal setSelectedImg={setSelectedImg} selectedImg={selectedImg} /> }
            <div className={classes.profile}>
                    {!!uniqueId.pet_name1 ? (
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <h4>{uniqueId.pet_name1}</h4>
                                <p>{uniqueId.pet_breed1}, {uniqueId.pet_age1}</p>
                                <p>{uniqueId.pet_personality1}</p>
                            </Paper>
                        </Grid>
                    </Grid>
                    ) : (
                        <>
                        </>
                    )}

                    {!!uniqueId.pet_name2 ? (
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <h4>{uniqueId.pet_name2}</h4>
                                <p>{uniqueId.pet_breed2}, {uniqueId.pet_age2}</p>
                                <p>{uniqueId.pet_personality2}</p>
                            </Paper>
                        </Grid>
                    </Grid>
                    ) : (
                        <>
                        </>
                    )}
                    {!!uniqueId.pet_name3 ? (
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <h4>{uniqueId.pet_name3}</h4>
                                <p>{uniqueId.pet_breed3}, {uniqueId.pet_age3}</p>
                                <p>{uniqueId.pet_personality3}</p>
                            </Paper>
                        </Grid>
                    </Grid>
                    ) : (
                        <>
                        </>
                    )}
            </div>
        </div>
    );
};

export default MyProfile;
