import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import Filter from '../multiLevelSelect/Filter';
import PossibleConnections from '../nonConnectedUsers/PossibleConnections';
import PetRegister from '../petRegistry/PetRegister';
import UserRegister from './UserRegister';
import { makeStyles } from "@material-ui/core/styles";
import Select from '@material-ui/core/Select';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        fontFamily: "Cabin",
        backgroundColor: 'pink',
        paddingTop: '10px',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    form: {
        textAlign: 'center',
        marginTop: '10px',
    },
    button: {
        margin: theme.spacing(1),
      },
}));

const UserInfo = ({handleReload, reload}) => {
    const { user } = useAuth0();
    const [uniqueId, setUniqueId] = useState([]);
    const [filter, setFilter] = useState('');
    const [filterBy, setFilterBy] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedImg, setSelectedImg] = useState(null);
    const classes = useStyles();

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
        <div className={classes.root}>
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
            <div className={classes.form}>
            <h4>Let's find puppies to play with!</h4>
            <PossibleConnections />
            </div>
        )}
        </div>
    )
}

export default UserInfo;