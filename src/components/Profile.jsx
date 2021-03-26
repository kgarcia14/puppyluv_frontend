import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import Home from './Home';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    
    return(
        isAuthenticated ? (
            <div>
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>{user.sub}</p>
                <JSONPretty data={user} />
                <h2>Create Your PuppyLuv Profile</h2>
                <form>
                    <label>First Name
                        <input
                            required
                            type="text"
                            name="first_name"
                            value=""
                            onChange=""
                            placeholder="Enter First Name"/>
                    </label>
                    <label>Last Name
                        <input
                            required
                            type="text"
                            name="last_name"
                            value=""
                            onChange=""
                            placeholder="Enter Last Name"/>
                    </label>
                    <label>Age
                        <input
                            required
                            type="number"
                            name="age"
                            min="18"
                            max="120"/>
                    </label>
                    <label>Gender
                        <select 
                            required
                            value=""
                            onChange="">
                            <option value="">Select Day</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <label>Zip Code 
                        <input 
                            type="integer"
                            placeholder="Enter Zip Code"/>
                    </label>
                    <label>Dog Name
                        <input
                            required
                            type="text"
                            name="pet_name"
                            value=""
                            onChange=""
                            placeholder="Enter Dog Name"/>
                    </label>
                    <label>Dog Breed
                        <input
                            required
                            type="text"
                            name="pet_breed"
                            value=""
                            onChange=""
                            placeholder="Enter Dog Breed"/>
                    </label>
                    <label>Dog Age
                        <input
                            required
                            type="number"
                            name="age"
                            min="0"
                            max="40"
                            placeholder=""/>
                    </label>
                    <label>Dog Personality
                        <select 
                            required
                            value=""
                            onChange="">
                            <option value="">Select Day</option>
                            <option value="playful">Playful</option>
                            <option value="outgoing">Outgoing</option>
                            <option value="mellow">Mellow</option>
                            <option value="independent">Independent</option>
                            <option value="adaptable">Adaptable</option>
                            <option value="grumpy">Grumpy</option>
                        </select>
                    </label>
                    <label>About Us
                        <textarea rows="4" cols="30" placeholder="Tell us about you and your doggy..."></textarea>
                    </label>
                    <label>picture of you and your dog
                        <input type="file"/>
                    </label>
                </form>
            </div>
        ) : (
            <Home />
        )

    
    )
}

export default Profile;