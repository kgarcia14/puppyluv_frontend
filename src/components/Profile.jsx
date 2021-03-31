import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import UserInfo from './UserInfo';
import LandingPage from './LandingPage';
import MoreInfo from './MoreInfo';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    const [reload, setReload] = useState(false);

    const handleReload = (status) => {
        setReload(status => !status );
    }


    return(
        isAuthenticated ? (
            <div>
                <UserInfo handleReload={handleReload} reload={reload} />
            </div>
        ) : (
            <>
                <LandingPage />
                <MoreInfo />
            </>
        )
    )
}

export default Profile;