import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';

const AboutUs = ({handleReload}) => {
    const { user } = useAuth0();
    const [userNickname, setUserNickname] = useState('');
    const [aboutUs, setAboutUs] = useState('');

    const _aboutUsChange = async (e) => {
        setAboutUs(e.target.value)
        setUserNickname(user.sub)
    }

    const _handleSubmitAboutUs = async (e) => {
        e.preventDefault();
        const apiUrl = 'http://127.0.0.1:3333/users/update/about_us';
        const submitResponse = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_nickname: userNickname,
                about_us: aboutUs,
            })
        }).then((response) => response);
        console.log("submit pet response is: ", submitResponse)

        if (submitResponse.status === 200) {
            console.log("submit response is 200")
            handleReload(true)
        }
    }

    return(
        <>
            <form onSubmit={_handleSubmitAboutUs}>
                <label>
                    <textarea 
                    rows="4" 
                    cols="30" 
                    name="about_us"
                    value={aboutUs}
                    onChange={_aboutUsChange}
                    placeholder="Tell us about you and your doggy..."></textarea>
                </label>
                <button 
                    type="submit">
                        Submit
                </button>
            </form>
        </>
    )
}

export default AboutUs;