import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from "@material-ui/core/styles";

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

const MyProfile = ({ handleReload, reload }) => {
    const classes = useStyles();
    const { user } = useAuth0();
    const [uniqueId, setUniqueId] = useState([]);

    useEffect(() => {
        (async () => {
            console.log(user.sub);
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
                <div>{uniqueId.user_img}</div>
                <h1>
                    {uniqueId.first_name} {uniqueId.last_name}
                </h1>
                <p>
                    {uniqueId.age} {uniqueId.gender} {uniqueId.city}
                </p>
                <p>{uniqueId.about_us}</p>
            </div>
            <h4>My Pets</h4>
            <div className={classes.profile}>
                {!!uniqueId.pet_name1 && uniqueId.pet_name2 === null ? (
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

                {!!uniqueId.pet_name2 && uniqueId.pet_name3 === null ? (
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <h4>{uniqueId.pet_name1}</h4>
                                <p>{uniqueId.pet_breed1}, {uniqueId.pet_age1}</p>
                                <p>{uniqueId.pet_personality1}</p>
                            </Paper>
                        </Grid>
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
                                <h4>{uniqueId.pet_name1}</h4>
                                <p>{uniqueId.pet_breed1}, {uniqueId.pet_age1}</p>
                                <p>{uniqueId.pet_personality1}</p>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <h4>{uniqueId.pet_name2}</h4>
                                <p>{uniqueId.pet_breed2}, {uniqueId.pet_age2}</p>
                                <p>{uniqueId.pet_personality2}</p>
                            </Paper>
                        </Grid>
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
