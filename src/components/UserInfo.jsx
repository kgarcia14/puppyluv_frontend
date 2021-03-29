import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import PetRegister from './PetRegister';
import UserRegister from './UserRegister';

const UserInfo = () => {
    const { user } = useAuth0();
    const [uniqueId, setUniqueId] = useState([]);
    console.log('pet name:', uniqueId.pet_name)
    console.log('user Name', uniqueId.first_name)

    useEffect(() => {
        (async () => {
            console.log(user.nickname)
            const apiUrl = `http://127.0.0.1:3333/users/${user.nickname}`
            const usersData = await fetch(apiUrl).then(response => response.json());
            setUniqueId(usersData)
        })();
    }, [user.nickname])

    return (
        <>
        {!!uniqueId.length ? (
            <UserRegister />
        ) : (
            <>
            </>
        )}

        {uniqueId.pet_name === null ? (
            <PetRegister />
        ) : (
            <>
            </>
        )}
        {uniqueId.length || uniqueId.pet_name === null ? (
            <>
            </>
        ) : (
            <p>
                UsersProfile will go here
            </p>
        )}
        </>
    )
}

export default UserInfo;