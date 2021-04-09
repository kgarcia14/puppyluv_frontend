import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import Styled from 'styled-components';

const H2 = Styled.h2`
    text-align: center;
    margin-top: 15px;
    color: #333;
`;

const Form = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 77vh;
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

const RegisterPet2 = ({ handleReload, pet1, pet2 }) => {
    const { user } = useAuth0();
    const [userNickname, setUserNickname] = useState('');
    const [petName, setPetName] = useState('');
    const [petBreed, setPetBreed] = useState('');
    const [petAge, setPetAge] = useState('');
    const [petPersonality, setPetPersonality] = useState('');

    const _petNameChange = async (e) => {
        setPetName(e.target.value)
        setUserNickname(user.sub)
    }
    const _petBreedChange = async (e) => {
        setPetBreed(e.target.value)
    }
    const _petAgeChange = async (e) => {
        setPetAge(e.target.value)
    }
    const _petPersonalityChange = async (e) => {
        setPetPersonality(e.target.value)
    }

    const _handleSubmitPetInfo = async (e) => {
        e.preventDefault();
        const apiUrl = 'http://127.0.0.1:3333/users/update/pet2';
        const submitResponse = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                user_nickname: userNickname,
                pet_name2: petName, 
                pet_breed2: petBreed, 
                pet_age2: petAge, 
                pet_personality2: petPersonality
            })
        }).then((response) => response);

        if (submitResponse.status === 200) {
            console.log("submit response is 200")
            handleReload(true)
        }
    }

    return(
        <>
        {pet1 !== null && pet2 === null ? (
            <>
            <H2>Dog 2</H2>
            <Form onSubmit={_handleSubmitPetInfo}>
                <Label>Dog Name
                    <Input
                        required
                        type="text"
                        name="pet_name"
                        value={petName}
                        onChange={_petNameChange}
                        placeholder=""/>
                </Label>
                <Label>Dog Breed
                    <Input
                        required
                        type="text"
                        name="pet_breed"
                        value={petBreed}
                        onChange={_petBreedChange}
                        placeholder=""/>
                </Label>
                <Label>Dog Age
                    <Input
                        required
                        type="number"
                        name="age"
                        min="0"
                        max="40"
                        value={petAge}
                        onChange={_petAgeChange}
                        placeholder=""/>
                </Label>
                <Label>Dog Personality
                    <Select 
                        required
                        name="pet_personality"
                        value={petPersonality}
                        onChange={_petPersonalityChange}>
                        <option value=""></option>
                        <option value="playful">Playful</option>
                        <option value="outgoing">Outgoing</option>
                        <option value="mellow">Mellow</option>
                        <option value="independent">Independent</option>
                        <option value="adaptable">Adaptable</option>
                        <option value="grumpy">Grumpy</option>
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
        ) : (
            <>
            </>
        )}
        </>
    )
}

export default RegisterPet2;