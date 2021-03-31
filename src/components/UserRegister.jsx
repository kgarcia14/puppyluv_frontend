import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';

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
            <h2>User Info</h2>
            <form onSubmit={_handleSubmitUserInfo}>
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
                <label>picture of you
                    <input 
                    type="file"
                    name="pet_img"
                    value={userImg}
                    onChange={_userImgChange}
                    />
                </label>
                <label>How many dogs do you have?
                    <select
                        required
                        name="numb_pets"
                        value={numbPets}
                        onChange={_numPetsChange}>
                        <option value="">Select a number</option>
                        <option value="">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </label>
                <button 
                    type="submit">
                        Submit
                </button>
            </form>
        </>
    )
}

export default UserRegister;