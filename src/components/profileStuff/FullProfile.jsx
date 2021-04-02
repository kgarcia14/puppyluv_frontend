import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Cabin",
        minHeight: '75vh'
    },
}));

const FullProfile = () => {
    const classes = useStyles();
    const [fullProfile, setFullProfile] = useState([]);
    const { otherUserId } = useParams();
    console.log(otherUserId);

    useEffect(() => {
        (async () => {
            const apiUrl = `http://127.0.0.1:3333/user_id/${otherUserId}`;
            const fullProfileData = await fetch(apiUrl).then(response => response.json());
            setFullProfile(fullProfileData)
        })();
    }, [])

    return (
        <div className={classes.root}>
            <h4>{fullProfile.first_name} {fullProfile.last_name}</h4><p>Number of dogs: {fullProfile.numb_pets}</p>
            {fullProfile.numb_pets === 1 && (
                <p>{fullProfile.pet_name1}</p>
            )}

            {fullProfile.numb_pets === 2 && (
                <>
                    <p>{fullProfile.pet_name1}</p>
                    <p>{fullProfile.pet_name2}</p>
                </>
            )}

            {fullProfile.numb_pets === 3 && (
                <>
                    <p>{fullProfile.pet_name1}</p>
                    <p>{fullProfile.pet_name2}</p>
                    <p>{fullProfile.pet_name3}</p>
                </>
            )}
        </div>
    )
}

export default FullProfile;