import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyFavoritesList from "./MyFavoritesList";
import Styled from 'styled-components';
import { fontSize, gray2 } from '../nonConnectedUsers/styles/Styles';

const Div = Styled.div`
margin: 50px 20px;
font-size: ${fontSize};
color: ${gray2};

@media (min-width: 750px) {
  margin-top: 80px;
}
`;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "block",
        justifyContent: "center",
    }
}));

const MyFavorites = ({ handleReload, reload }) => {
    const classes = useStyles();
    const { user } = useAuth0();
    const [favoriteUsers, setFavoriteUsers] = useState([]);
    console.log("favorites are: ", favoriteUsers)
    
    useEffect(() => {
        (async () => {
            console.log(user.sub);
            const apiUrl = `http://127.0.0.1:3333/ft/${user.sub}`;
            const usersData = await fetch(apiUrl).then((response) => response.json());
            setFavoriteUsers(usersData);
        })();
    }, [user.sub, reload]);
    
    return (
        <>
        {!!favoriteUsers.length ? (
            <MyFavoritesList favoriteUsers={favoriteUsers} />
        ) : (
            <Div>
                <h3>You haven't favorite-ed anyone yet! Get out there and find your PuppyLuv Partner!</h3>
            </Div>
        )}
        </>
    );
};

export default MyFavorites;