import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import MyFavoritesList from "./MyFavoritesList";

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
            <h1>Go favorite some people!</h1>
        )}
        </>
    );
};

export default MyFavorites;