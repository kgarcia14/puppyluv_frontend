import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import Register from './Register';

const UserInfo = () => {
    const { user } = useAuth0();
    const [uniqueId, setUniqueId] = useState([]);
    console.log(uniqueId)

    useEffect(() => {
        (async () => {
            console.log(user.nickname)
            const apiUrl = `http://127.0.0.1:3333/users/${user.nickname}`
            const usersData = await fetch(apiUrl).then(response => response.json());
            setUniqueId(usersData)
            console.log()
        })();
    }, [user.nickname])

    return (
        <>
        {!!uniqueId.length ? (
            <Register />
            ) : (
                <p>UsersProfile will go here</p>
            )}
        </>
    )
}

export default UserInfo;