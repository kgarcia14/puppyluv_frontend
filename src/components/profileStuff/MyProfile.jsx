import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import PossibleConnections from '../nonConnectedUsers/PossibleConnections';
import PetRegister from '../petRegistry/PetRegister';
import UserRegister from './UserRegister';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Cabin",
        height: '50vh',
        textAlign: 'center',
        backgroundColor: 'pink',
        marginLeft: '30px',
        marginRight: '30px',
    },
}));

const MyProfile = ({handleReload, reload}) => {
    const classes = useStyles();
    const { user } = useAuth0();
    const [uniqueId, setUniqueId] = useState([]);

    useEffect(() => {
        (async () => {
            console.log(user.sub)
            const apiUrl = `http://127.0.0.1:3333/users/${user.sub}`
            const usersData = await fetch(apiUrl).then(response => response.json());
            setUniqueId(usersData)
        })();
    }, [user.sub, reload])

    return (
        <div className={classes.root}>
            <header>
                <div>
                    {uniqueId.user_img}
                </div>
                <h1>{uniqueId.first_name} {uniqueId.last_name}</h1>
                <p>{uniqueId.age} {uniqueId.gender} {uniqueId.city}</p>
                <p>{uniqueId.about_us}</p>
                <p>hehe</p>
            </header>
        </div>
    );
};

export default MyProfile;