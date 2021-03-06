import Styled from 'styled-components';
import {
    fontSize,
    gray2,
    gray5,
    accent1
} from '../nonConnectedUsers/styles/Styles'
import FavoritesThumbCard from './FavoritesThumbCard';

const Container = Styled.div`
margin: 50px 20px;
font-size: ${fontSize};
color: ${gray2};
margin-top: 60px;
@media (min-width: 750px) {
  margin-top: 80px;
}
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

const MyFavoritesList = ({favoriteUsers}) => {

    return (
        <>
        {!!favoriteUsers && (
          <Container>
                <List>
                {favoriteUsers.map((favorite, index) => (
                <ListItem key={index}>
                    <FavoritesThumbCard favorite={favorite}/>
                </ListItem>
                ))}
                </List>
          </Container>
        )}
        </>
    )
}

export default MyFavoritesList;