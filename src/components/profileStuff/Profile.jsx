import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import UserInfo from './UserInfo';
import LandingPage from '../landingPageStuff/LandingPage';
import MoreInfo from '../landingPageStuff/MoreInfo';

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