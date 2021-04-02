import { useState, useEffect } from 'react'
import UserThumbCard from '../nonConnectedUsers/UserThumbCard'
import Styled from 'styled-components';
import {
    fontSize,
    gray2,
    gray5,
    accent1
} from '../nonConnectedUsers/styles/Styles'

const Container = Styled.div`
  width: 400px;
  margin: 30px auto;
  font-size: ${fontSize};
  color: ${gray2};
`;

const List = Styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 3px solid ${accent1};
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

const ListItem = Styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-top: 1px solid ${gray5};
  :first-of-type {
    border-top: none;
  }
`;

const Filter = () => {
    const [filter, setFilter] = useState('')
    const [filterBy, setFilterBy] = useState('')
    const [filteredUsers, setFilteredUsers] = useState([])
    console.log("filter is: ", filter)
    console.log("filterBy is: ", filterBy)
    console.log("filtered users are: ", filteredUsers);

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
            
    return(
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
        {!!filteredUsers ? (
            <Container>
                <List>
                {filteredUsers.map((fUser, index) => (
                    <ListItem key={index}>
                        <p>{fUser.first_name}</p>
                    </ListItem>
                ))}
                </List>
            </Container>
            
        ) : (
            <p>here will lie the filtered list</p>
        )}
        </>
    )
}

export default Filter;