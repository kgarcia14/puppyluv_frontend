import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "block",
        justifyContent: "center",
    }
}));

const MyFavorites = ({ handleReload, reload }) => {
    const classes = useStyles();
    const { user } = useAuth0();
    const [uniqueId, setUniqueId] = useState([]);
    
    useEffect(() => {
        (async () => {
            console.log(user.sub);
            const apiUrl = `http://127.0.0.1:3333/users/${user.sub}`;
            const usersData = await fetch(apiUrl).then((response) => response.json());
            setUniqueId(usersData);
        })();
    }, [user.sub, reload]);
    
    return (
        <h1>hiii</h1>
    );
};

export default MyFavorites;
