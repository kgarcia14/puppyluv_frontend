import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import Filter from '../multiLevelSelect/Filter';
import PossibleConnections from '../nonConnectedUsers/PossibleConnections';
import PetRegister from '../petRegistry/PetRegister';
import UserRegister from './UserRegister';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Cabin",
    },
}));

const UserInfo = ({handleReload, reload}) => {
    const { user } = useAuth0();
    const [uniqueId, setUniqueId] = useState([]);
    const [filter, setFilter] = useState('')
    const [filterBy, setFilterBy] = useState('')
    const [filteredUsers, setFilteredUsers] = useState([])
    
    console.log("uniqueId: ", uniqueId)

    const _handleFilterChange = (e) => {
        setFilter(e.target.value);
      };
      const _handleFilterByChange = (e) => {
        setFilterBy(e.target.value)   
    }

    const _handleFilterSubmit = async (e) => {
        e.preventDefault();
        setFilteredUsers([])
        const apiUrl = `http://127.0.0.1:3333/filter/${filterBy}`;
        const filteredData = await fetch(apiUrl).then(response => response.json());
        setFilteredUsers(filteredData);
    }

    useEffect(() => {
        (async () => {
            console.log(user.sub)
            const apiUrl = `http://127.0.0.1:3333/users/${user.sub}`
            const usersData = await fetch(apiUrl).then(response => response.json());
            setUniqueId(usersData)
        })();
    }, [user.sub, reload])

    return (
        <>
        {!!uniqueId.length ? (
            <>
            <UserRegister handleReload={handleReload} />
            </>
        ) : (
            <>
            </>
        )}

        {uniqueId.about_us === null ? (
            <>
            <PetRegister handleReload={handleReload} reload={reload}/>
            </>
        ) : (
            <>
            </>
        )}
        {uniqueId !== 'No data returned from the query.' && uniqueId.about_us !== null && (
            <>
            <p>Filter</p>
            <select
            value={filter}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Please select"
            onChange={_handleFilterChange}>
                <option value="">please choose</option>
                <option value="age">Age</option>
                <option value="city">City</option>
                <option value="gender">Gender</option>
                <option value="numb_pets">Number of Pets</option>
                <option value="pet_personality">Pet Personality</option>
            </select>
            {filter === 'age' && (
            <form onSubmit={_handleFilterSubmit}>
                <select
                value={filterBy}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                onChange={_handleFilterByChange}>
                    <option value="">please choose</option>
                    <option value="1820">18 - 20</option>
                    <option value="2025">20 - 25</option>
                    <option value="2530">25 - 30</option>
                    <option value="3035">30 - 35</option>
                    <option value="3540">35 - 40</option>
                </select>
                <button
                    type="submit">
                    Submit
                </button>
            </form>
        )}
        {filter === 'gender' && (
            <form onSubmit={_handleFilterSubmit}>
                <select
                value={filterBy}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                onChange={_handleFilterByChange}>
                    <option value="">please choose</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <button
                    type="submit">
                    Submit
                </button>
            </form>
        )}
        {filter === 'city' && (
            <form onSubmit={_handleFilterSubmit}>
                <select
                value={filterBy}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                onChange={_handleFilterByChange}>
                    <option value="">please choose</option>
                    <option value="Atlanta">Atlanta</option>
                </select>
                <button
                    type="submit">
                    Submit
                </button>
            </form>
        )}
        {filter === 'numb_pets' && (
            <form onSubmit={_handleFilterSubmit}>
                <select
                value={filterBy}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                onChange={_handleFilterByChange}>
                    <option value="">please choose</option>
                    <option value="0">No Pets</option>
                    <option value="1">1 Pet</option>
                    <option value="2">2 Pets</option>
                    <option value="3">3 Pets</option>
                    <option value="4">3+ Pets</option>
                </select>
                <button
                    type="submit">
                    Submit
                </button>
            </form>
        )}
        {filter === 'pet_personality' && (
            <form onSubmit={_handleFilterSubmit}>
                <select
                value={filterBy}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                onChange={_handleFilterByChange}>
                    <option value="">please choose</option>
                    <option value="playful">Playful</option>
                    <option value="outgoing">Outgoing</option>
                    <option value="mellow">Mellow</option>
                    <option value="independent">Independent</option>
                    <option value="adaptable">Adaptable</option>
                    <option value="grumpy">Grumpy</option>
                </select>
                <button
                    type="submit">
                    Submit
                </button>
            </form>
        )}
        {!!filteredUsers.length ? (
            <Filter filteredUsers={filteredUsers}/>
        ) : (
            <PossibleConnections />
        )}
            </>
        )}
        </>
    )
}

export default UserInfo;