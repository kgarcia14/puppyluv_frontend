import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import Filter from '../multiLevelSelect/Filter';
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
    },
}));

const UserInfo = ({handleReload, reload}) => {
    const classes = useStyles();
    const { user } = useAuth0();
    const [uniqueId, setUniqueId] = useState([]);
    console.log("uniqueId: ", uniqueId)
    console.log('pet name:', uniqueId.pet_name1)
    console.log('user Name', uniqueId.first_name)

    useEffect(() => {
        (async () => {
            console.log(user.sub)
            const apiUrl = `http://127.0.0.1:3333/users/${user.sub}`
            const usersData = await fetch(apiUrl).then(response => response.json());
            setUniqueId(usersData)
        })();
    }, [user.sub, reload])

    return (
        <>
        {!!uniqueId.length ? (
            <>
            <UserRegister handleReload={handleReload} />
            </>
        ) : (
            <>
            </>
        )}

        {uniqueId.about_us === null ? (
            <>
            <PetRegister handleReload={handleReload} reload={reload}/>
            </>
        ) : (
            <>
            </>
        )}
        {uniqueId !== 'No data returned from the query.' && uniqueId.about_us !== null && (
            <>
            <Filter handleReload={handleReload}/>
            <PossibleConnections />
            </>
        )}
        </>
    )
}

export default UserInfo;