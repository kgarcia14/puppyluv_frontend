import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import Styled from 'styled-components';
import PetPhotoUpload from '../petPhotoStuff/PetPhotoUpload';
import PetImageGrid from '../petPhotoStuff/PetImageGrid';

const Textarea = Styled.textarea`
    border-radius: 4px;
    width: 300px;
    
    @media (min-width: 370px) {
        width: 350px;
    }
    @media (min-width: 410px) {
        width: 350px;
    }
    @media (min-width: 750px) {
        width: 500px;
    }
`;

const Form = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Label = Styled.label`
    display: flex;
    flex-direction: column;
`;

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
            <Form onSubmit={_handleSubmitAboutUs}>
                <Label>
                    <Textarea 
                    rows="5" 
                    cols="47" 
                    name="about_us"
                    value={aboutUs}
                    onChange={_aboutUsChange}
                    placeholder="Tell us about you and your doggy..."
                    required></Textarea>
                </Label>
                <PetPhotoUpload />
                
                <Button 
                    className="user-register-button"
                    variant="contained" 
                    color="primary"
                    type="submit">
                        Submit
                </Button>
            </Form>
            <PetImageGrid />
        </>
    )
}

export default AboutUs;