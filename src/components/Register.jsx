import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import JSONPretty from 'react-json-pretty';

const Register = () => {
    const { user } = useAuth0();

    const [userNickname, setUserNickname] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [aboutUs, setAboutUs] = useState('');
    const [userImg, setUserImg] = useState('');
    const [petName, setPetName] = useState('');
    const [petBreed, setPetBreed] = useState('');
    const [petAge, setPetAge] = useState('');
    const [petPersonality, setPetPersonality] = useState('');
    const [petImg, setPetImg] = useState('');


    const _firstNameChange = async (e) => {
        setFirstName(e.target.value)
        setUserNickname(user.nickname)
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
    const _aboutUsChange = async (e) => {
        setAboutUs(e.target.value)
    }
    const _userImgChange = async (e) => {
        setUserImg(e.target.value)
    }
    const _petNameChange = async (e) => {
        setPetName(e.target.value)
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

    const _handleSubmitProfile = async (e) => {
        e.preventDefault();
        const apiUrl = 'http://127.0.0.1:3333/users/add'
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
                about_us: aboutUs, 
                user_img: userImg,
                user_nickname: userNickname, 
                pet_name: petName, 
                pet_breed: petBreed, 
                pet_age: petAge, 
                pet_personality: petPersonality, 
                pet_img: petImg 
            })
        }).then(
            (response) => response
        );
        console.log("submit response is: ", submitResponse)

        if (submitResponse.status === 200) {
            console.log("submit response is 200")
        }
    }

    return(
        <>
        <h2>Create Your PuppyLuv Profile</h2>
            <form onSubmit={_handleSubmitProfile}>
                <label>First Name
                    <input
                        required
                        type="text"
                        name="first_name"
                        value={firstName}
                        onChange={_firstNameChange}
                        placeholder="Enter First Name"/>
                </label>
                <label>Last Name
                    <input
                        required
                        type="text"
                        name="last_name"
                        value={lastName}
                        onChange={_lastNameChange}
                        placeholder="Enter Last Name"/>
                </label>
                <label>Age
                    <input
                        required
                        type="number"
                        name="age"
                        min="18"
                        max="120"
                        value={age}
                        onChange={_ageChange}/>
                </label>
                <label>Gender
                    <select 
                        required
                        name="gender"
                        value={gender}
                        onChange={_genderChange}>
                        <option value="">Choose One</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <label>
                    City
                    <select
                        required
                        name="city"
                        value={city}
                        onChange={_cityChange}>
                            <option value="">Choose One</option>
                            <option value="Atlanta">Atlanta</option>
                        </select>
                </label>
                <label>Zip Code 
                    <input 
                        type="integer"
                        placeholder="Enter Zip Code"
                        value={zipCode}
                        onChange={_zipCodeChange}/>
                </label>
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
                <label>About Us
                    <textarea 
                    rows="4" 
                    cols="30" 
                    name="about_us"
                    value={aboutUs}
                    onChange={_aboutUsChange}
                    placeholder="Tell us about you and your doggy..."></textarea>
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
    )
}

export default Register;