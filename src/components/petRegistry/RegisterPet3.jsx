import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';

const RegisterPet3 = ({ pet1, pet2, pet3 }) => {
    const { user } = useAuth0();
    const [userNickname, setUserNickname] = useState('');
    const [petName, setPetName] = useState('');
    const [petBreed, setPetBreed] = useState('');
    const [petAge, setPetAge] = useState('');
    const [petPersonality, setPetPersonality] = useState('');
    const [petImg, setPetImg] = useState('');

    const _petNameChange = async (e) => {
        setPetName(e.target.value)
        setUserNickname(user.nickname)
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
        const apiUrl = 'http://127.0.0.1:3333/users/update/pet3';
        const submitResponse = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                user_nickname: userNickname,
                pet_name3: petName, 
                pet_breed3: petBreed, 
                pet_age3: petAge, 
                pet_personality3: petPersonality, 
                pet_img3: petImg 
            })
        }).then((response) => response);
        console.log("submit pet response is: ", submitResponse)

        if (submitResponse.status === 200) {
            console.log("submit response is 200")
        }
    }

    return(
        <>
        {pet1 !== null && pet2 !== null && pet3 === null ? (
            <>
            <h2>Pet #3</h2>
            <form onSubmit={_handleSubmitPetInfo}>
                <label>Dog Name
                    <input
                        required
                        type="text"
                        name="pet_name"
                        value={petName}
                        onChange={_petNameChange}
                        placeholder="Enter Dog Name"/>
                </label>
                <label>Dog Breed
                    <input
                        required
                        type="text"
                        name="pet_breed"
                        value={petBreed}
                        onChange={_petBreedChange}
                        placeholder="Enter Dog Breed"/>
                </label>
                <label>Dog Age
                    <input
                        required
                        type="number"
                        name="age"
                        min="0"
                        max="40"
                        value={petAge}
                        onChange={_petAgeChange}
                        placeholder=""/>
                </label>
                <label>Dog Personality
                    <select 
                        required
                        name="pet_personality"
                        value={petPersonality}
                        onChange={_petPersonalityChange}>
                        <option value="">Choose One</option>
                        <option value="playful">Playful</option>
                        <option value="outgoing">Outgoing</option>
                        <option value="mellow">Mellow</option>
                        <option value="independent">Independent</option>
                        <option value="adaptable">Adaptable</option>
                        <option value="grumpy">Grumpy</option>
                    </select>
                </label>
                <label>picture of you and your dog
                    <input 
                    type="file"
                    name="pet_img"
                    value={petImg}
                    onChange={_petImgChange}
                    />
                </label>
                <button 
                    type="submit">
                        Submit
                </button>
            </form>
            </>
        ) : (
            <>
            </>
        )}
        </>
    )
}

export default RegisterPet3;