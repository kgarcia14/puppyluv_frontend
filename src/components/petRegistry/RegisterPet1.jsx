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
`;

const Label = Styled.label`
    display: flex;
    flex-direction: column;
    color: #333;
`;

const Input = Styled.input`
    width: 350px;
    height: 35px;
    border: 1px solid #857c81;
    border-radius: 4px;
`;

const Select = Styled.select`
    width: 350px;
    height: 35px;
    border: 1px solid #857c81;
    border-radius: 4px;
    background-color: #fff;
`;

const RegisterPet1 = ({ handleReload, pet1 }) => {
    const { user } = useAuth0();
    const [userNickname, setUserNickname] = useState('');
    const [petName, setPetName] = useState('');
    const [petBreed, setPetBreed] = useState('');
    const [petAge, setPetAge] = useState('');
    const [petPersonality, setPetPersonality] = useState('');
    const [petImg, setPetImg] = useState('');
    console.log('pet 1 is:', pet1)

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
    const _petImgChange = async (e) => {
        setPetImg(e.target.value)
    }

    const _handleSubmitPetInfo = async (e) => {
        e.preventDefault();
        const apiUrl = 'http://127.0.0.1:3333/users/update/pet1';
        const submitResponse = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                user_nickname: userNickname,
                pet_name1: petName, 
                pet_breed1: petBreed, 
                pet_age1: petAge, 
                pet_personality1: petPersonality, 
                pet_img1: petImg 
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
        {pet1 === null ? (
            <>
            <H2>Dog 1</H2>
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
                <Label>picture of your dog
                    <Input 
                    type="file"
                    name="pet_img"
                    value={petImg}
                    onChange={_petImgChange}
                    />
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

export default RegisterPet1;