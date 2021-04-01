import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import PossibleConnections from '../nonConnectedUsers/PossibleConnections';
import PetRegister from '../petRegistry/PetRegister';
import UserRegister from './UserRegister';

const UserInfo = ({handleReload, reload}) => {
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
            <h5>Please create a profile...</h5>
            <UserRegister handleReload={handleReload} />
            </>
        ) : (
            <>
            </>
        )}

        {uniqueId.about_us === null ? (
            <>
            <h5>Please create a profile...</h5>
            <PetRegister handleReload={handleReload} reload={reload}/>
            </>
        ) : (
            <>
            </>
        )}
        {uniqueId !== 'No data returned from the query.' && uniqueId.about_us !== null && (
            <PossibleConnections />
        )}
        </>
    )
}

export default UserInfo;