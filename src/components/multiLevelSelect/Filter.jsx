import Styled from 'styled-components';
import {
    fontSize,
    gray2,
    gray5,
    accent1
} from '../nonConnectedUsers/styles/Styles'
import FilterThumbCard from './FilterThumbCard';
import { useAuth0 } from '@auth0/auth0-react';

const Container = Styled.div`
width: 100%;
margin: 30px auto;
font-size: ${fontSize};
color: ${gray2};
`;

const List = Styled.ul`
display: flex;
flex-direction: column;
align-items: center;
list-style: none;
padding: 0px 20px;
background-color: #fff;
border-bottom-left-radius: 4px;
border-bottom-right-radius: 4px;
border-top: 3px solid ${accent1};
box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

const ListItem = Styled.li`
padding: 10px 0px;
width: 260px;
border-top: 1px solid ${gray5};
:first-of-type {
  border-top: none;
}
@media (min-width: 370px) {
  width: 315px;
}
@media (min-width: 410px) {
  width: 345px;
}
@media (min-width: 750px) {
  width: 445px;
}
`;

const Filter = ({ filteredUsers }) => {
  const { user } = useAuth0();
    console.log("filtered users are: ", filteredUsers);
        
    return(
        <>

        {!!filteredUsers ? (
            <Container>
                <List>
                {filteredUsers.filter(fUser => fUser.user_nickname !== user.sub).map((fUser, index) => (
                    <ListItem key={index}>
                        <FilterThumbCard fUser={fUser} />
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