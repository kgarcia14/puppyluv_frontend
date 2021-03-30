import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import Home from './Home';
import UserInfo from './UserInfo';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();



    return(
        isAuthenticated ? (
            <div>
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>{user.sub}</p>
                <JSONPretty data={user} />
                <UserInfo />
            </div>
        ) : (
            <Home />
        )
    )
}

export default Profile;