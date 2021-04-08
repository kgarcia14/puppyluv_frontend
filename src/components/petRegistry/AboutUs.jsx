import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import Styled from 'styled-components';
import PetPhotoUpload from '../petPhotoStuff/PetPhotoUpload';
import PetImageGrid from '../petPhotoStuff/PetImageGrid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

const H2 = Styled.h2`
    text-align: center;
    margin-top: 15px;
    color: #333;
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

const useStyles = makeStyles((theme) => ({
    text: {
        margin: theme.spacing(1),
        width: '50ch',
    },
}));

const AboutUs = ({handleReload}) => {
    const { user } = useAuth0();
    const [userNickname, setUserNickname] = useState('');
    const [aboutUs, setAboutUs] = useState('');
    const classes = useStyles();


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
            <H2>About Us</H2>
            <Form onSubmit={_handleSubmitAboutUs}>
                <Label>
                    <TextField className={classes.text}
                    name="about_us"
                    label="Tell us about you and your doggy..."
                    multiline
                    rows={4}
                    variant="outlined"
                    value={aboutUs}
                    onChange={_aboutUsChange}
                    required></TextField>
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