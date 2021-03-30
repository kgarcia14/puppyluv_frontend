import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import { useState } from 'react';
import Home from './Home';
import UserInfo from './UserInfo';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    const [reload, setReload] = useState('');

    const handleReload = (status) => {
        setReload(status => !status);
    }



    return(
        isAuthenticated ? (
            <div>
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>{user.sub}</p>
                <JSONPretty data={user} />
                <UserInfo reload={reload} handleReload={handleReload}/>
            </div>
        ) : (
            <Home />
        )
    )
}

export default Profile;