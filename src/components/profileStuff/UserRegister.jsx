import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import Styled from 'styled-components';
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ProfPhotoUpload from '../profPhotoStuff/ProfPhotoUpload'
import ProfImage from '../profPhotoStuff/ProfImage';

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
    color: #333;
`;

const Input = Styled.input`
    width: 275px;
    height: 30px;
    border: 1px solid #857c81;
    border-radius: 4px;

    @media (min-width: 370px) {
        width: 325px;
        height: 35px;
    }
    @media (min-width: 410px) {
        width: 350px;
        height: 35px;
    }
    @media (min-width: 750px) {
        width: 500px;
        height: 40px;
    }
`;

const Select = Styled.select`
    width: 275px;
    height: 30px;
    border: 1px solid #857c81;
    border-radius: 4px;
    background-color: #fff;

    @media (min-width: 370px) {
        width: 325px;
        height: 35px;
    }
    @media (min-width: 410px) {
        width: 350px;
        height: 35px;
    }
    @media (min-width: 750px) {
        width: 500px;
        height: 40px;
    }
`;

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Cabin",
    },
}));

const UserRegister = ({ handleReload }) => {
    const { user } = useAuth0();
    const classes = useStyles();

    const [userNickname, setUserNickname] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [userImg, setUserImg] = useState('');
    const [numbPets, setNumbPets] = useState('');

    const _firstNameChange = async (e) => {
        setFirstName(e.target.value)
        setUserNickname(user.sub)
    }
    const _lastNameChange = async (e) => {
        setLastName(e.target.value)
    }
    const _ageChange = async (e) => {
        setAge(e.target.value)
    }
    const _genderChange = async (e) => {
        setGender(e.target.value)
    }
    const _cityChange = async (e) => {
        setCity(e.target.value)
    }
    const _zipCodeChange = async (e) => {
        setZipCode(e.target.value)
    }
    const _userImgChange = async (e) => {
        setUserImg(e.target.value)
    }
    const _numPetsChange = async (e) => {
        setNumbPets(e.target.value)
    }

    const _handleSubmitUserInfo = async (e) => {
        e.preventDefault();
        const apiUrl = 'http://127.0.0.1:3333/users/add';
        const submitResponse = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                first_name: firstName, 
                last_name: lastName, 
                age: age, 
                gender: gender, 
                city: city, 
                zipcode: zipCode,
                user_nickname: userNickname,
                numb_pets: numbPets,    
            })
        }).then((response) => response);
        console.log("submit user response is: ", submitResponse)

        if (submitResponse.status === 200) {
            console.log("submit response is 200")
            handleReload(true);
        }
    }

    return(
        <div className={classes.root}>
            <H2>User Information</H2>
            <Form onSubmit={_handleSubmitUserInfo}>
                <Label>First Name
                    <Input
                        required
                        type="text"
                        name="first_name"
                        value={firstName}
                        onChange={_firstNameChange}
                        placeholder=""/>
                </Label>
                <Label>Last Name
                    <Input
                        required
                        type="text"
                        name="last_name"
                        value={lastName}
                        onChange={_lastNameChange}
                        placeholder=""/>
                </Label>
                <Label>Age
                    <Input
                        required
                        type="number"
                        name="age"
                        min="18"
                        max="120"
                        value={age}
                        onChange={_ageChange}/>
                </Label>
                <Label>Gender
                    <Select 
                        required
                        name="gender"
                        value={gender}
                        onChange={_genderChange}>
                        <option value=""></option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </Select>
                </Label>
                <Label>City
                    <Select
                        required
                        name="city"
                        value={city}
                        onChange={_cityChange}>
                            <option value=""></option>
                            <option value="Atlanta">Atlanta</option>
                    </Select>
                </Label>
                <Label>Zip Code 
                    <Input 
                        type="integer"
                        placeholder=""
                        value={zipCode}
                        onChange={_zipCodeChange}/>
                </Label>
                <ProfPhotoUpload />
                <Label>How many dogs do you have?
                    <Select
                        required
                        name="numb_pets"
                        value={numbPets}
                        onChange={_numPetsChange}>

                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="0">Lost a Dog</option>
                    </Select>
                </Label>
                <Button
                    className="user-register-button"
                    variant="contained" 
                    color="primary" 
                    type="submit">
                        Submit
                </Button>
            </Form>
            <ProfImage />
        </div>
    )
}

export default UserRegister;