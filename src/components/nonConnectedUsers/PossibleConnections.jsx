import { useState, useEffect } from 'react'
import Styled from 'styled-components';
import UserThumbCard from './UserThumbCard';
import {
    fontSize,
    gray2,
    gray5,
    accent1
} from './styles/Styles'

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

const PossibleConnections = () => {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const apiUrl = `http://127.0.0.1:3333/users`;
            const allUsersData = await fetch(apiUrl).then(response => response.json());
            setAllUsers(allUsersData)
        })();
    },[])
    return (
        <Container>
        <List>
            {allUsers.map((allUser, index) => (
                <ListItem key={index}>
                    <UserThumbCard allUser={allUser} />
                </ListItem>
            ))}
        </List>
        </Container>
    )
}

export default PossibleConnections;