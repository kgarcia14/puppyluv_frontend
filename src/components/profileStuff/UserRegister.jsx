import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import Styled from 'styled-components';
import { Button } from '@material-ui/core';

const H2 = Styled.h2`
text-align: center;
margin-top: 15px;
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

const Input = Styled.input`
    width: 350px;
    height: 35px;
    border: 1px solid #333;
    border-radius: 4px;
`;

const Select = Styled.select`
    width: 350px;
    height: 35px;
    border: 1px solid #333;
    border-radius: 4px;
    background-color: #fff;
`;


const UserRegister = ({ handleReload }) => {
    const { user } = useAuth0();

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
                user_img: userImg,
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
        <>
            <H2>User Information</H2>
            <Form onSubmit={_handleSubmitUserInfo}>
                <Label>First Name
                    <Input
                        required
                        type="text"
                        name="first_name"
                        value={firstName}
                        onChange={_firstNameChange}
                        placeholder="Enter First Name"/>
                </Label>
                <Label>Last Name
                    <Input
                        required
                        type="text"
                        name="last_name"
                        value={lastName}
                        onChange={_lastNameChange}
                        placeholder="Enter Last Name"/>
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
                        <option value="">Choose One</option>
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
                            <option value="">Choose One</option>
                            <option value="Atlanta">Atlanta</option>
                        </Select>
                </Label>
                <Label>Zip Code 
                    <Input 
                        type="integer"
                        placeholder="Enter Zip Code"
                        value={zipCode}
                        onChange={_zipCodeChange}/>
                </Label>
                <Label>picture of you
                    <Input 
                    type="file"
                    name="pet_img"
                    value={userImg}
                    onChange={_userImgChange}
                    />
                </Label>
                <Label>How many dogs do you have?
                    <Select
                        required
                        name="numb_pets"
                        value={numbPets}
                        onChange={_numPetsChange}>
                        <option value="">Select a number</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="0">lost a dog</option>
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
        </>
    )
}

export default UserRegister;