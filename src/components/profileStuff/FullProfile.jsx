import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FullProfile = () => {
    const [fullProfile, setFullProfile] = useState([]);
    const {otherUserId} = useParams();
    console.log(otherUserId);

    useEffect(() => {
        (async () => {
            const apiUrl = `http://127.0.0.1:3333/users/${otherUserId}`;
            const fullProfileData = await fetch(apiUrl).then(response => response.json());
            setFullProfile(fullProfileData)
        })();
    },[])

    return (
        <>
            <p>{fullProfile.first_name}</p>
        </>
    )
}

export default FullProfile;