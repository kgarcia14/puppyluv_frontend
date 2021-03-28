import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import Register from './Register';

const UserInfo = () => {
    const { user } = useAuth0();
    const [uniqueId, setUniqueId] = useState([]);

    useEffect(() => {
        (async () => {
            const apiUrl = `http://127.0.0.1:3333/users/user/${user.sub}`
            const usersData = await fetch(apiUrl).then(response => response.json());
            setUniqueId(usersData)
        })();
    }, [user.sub])

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