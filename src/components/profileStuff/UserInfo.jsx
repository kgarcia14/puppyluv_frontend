import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import Filter from '../multiLevelSelect/Filter';
import PossibleConnections from '../nonConnectedUsers/PossibleConnections';
import PetRegister from '../petRegistry/PetRegister';
import UserRegister from './UserRegister';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Cabin",
        backgroundColor: 'pink',
        marginLeft: '30px',
        marginRight: '30px',
        marginBottom: '30px',
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
        marginTop: '30px',
    }
}));

const UserInfo = ({handleReload, reload}) => {
    const { user } = useAuth0();
    const [uniqueId, setUniqueId] = useState([]);
    const [filter, setFilter] = useState('')
    const [filterBy, setFilterBy] = useState('')
    const [filteredUsers, setFilteredUsers] = useState([])
    const classes = useStyles();
    
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
            <FormControl>
            <h4>Let's find puppies to play with!</h4>
            <Select
            value={filter}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Please Select"
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'Without label' }}
            autoWidth
            onChange={_handleFilterChange}>
                <option value="">Please Select</option>
                <option value="age">Age</option>
                <option value="city">City</option>
                <option value="gender">Gender</option>
                <option value="numb_pets">Number of Pets</option>
                <option value="pet_personality">Pet Personality</option>
            </Select>
            {filter === 'age' && (
            <form onSubmit={_handleFilterSubmit}>
                <Select
                value={filterBy}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please Select"
                displayEmpty
                autoWidth
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
                onChange={_handleFilterByChange}>
                    <option value="">Please Select</option>
                    <option value="1820">18 - 20</option>
                    <option value="2025">20 - 25</option>
                    <option value="2530">25 - 30</option>
                    <option value="3035">30 - 35</option>
                    <option value="3540">35 - 40</option>
                </Select>
                <div className={classes.formControl}>
                <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                    type='submit'
                >
                    Submit
                </Button>
                </div>
            </form>
        )}
        {filter === 'gender' && (
            <form onSubmit={_handleFilterSubmit}>
                <Select
                value={filterBy}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please Select"
                displayEmpty
                autoWidth
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
                onChange={_handleFilterByChange}>
                    <option value="">Please Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </Select>
                <div className={classes.formControl}>
                <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                    type='submit'
                >
                    Submit
                </Button>
                </div>
            </form>
        )}
        {filter === 'city' && (
            <form onSubmit={_handleFilterSubmit}>
                <Select
                value={filterBy}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please Select"
                displayEmpty
                autoWidth
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
                onChange={_handleFilterByChange}>
                    <option value="">Please Select</option>
                    <option value="Atlanta">Atlanta</option>
                </Select>
                <div className={classes.formControl}>
                <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                    type='submit'
                >
                    Submit
                </Button>
                </div>
            </form>
        )}
        {filter === 'numb_pets' && (
            <form onSubmit={_handleFilterSubmit}>
                <Select
                value={filterBy}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto', justifyContent: 'center' }}
                placeholder="Please Select"
                onChange={_handleFilterByChange}>
                    <option value="">Please Select</option>
                    <option value="0">No Pets</option>
                    <option value="1">1 Pet</option>
                    <option value="2">2 Pets</option>
                    <option value="3">3 Pets</option>
                    <option value="4">3+ Pets</option>
                </Select>
                <div className={classes.formControl}>
                <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                    type='submit'
                >
                    Submit
                </Button>
                </div>
            </form>
        )}
        {filter === 'pet_personality' && (
            <form onSubmit={_handleFilterSubmit}>
                <Select
                value={filterBy}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please Select"
                onChange={_handleFilterByChange}>
                    <option value="">Please Select</option>
                    <option value="playful">Playful</option>
                    <option value="outgoing">Outgoing</option>
                    <option value="mellow">Mellow</option>
                    <option value="independent">Independent</option>
                    <option value="adaptable">Adaptable</option>
                    <option value="grumpy">Grumpy</option>
                </Select>
                <div className={classes.formControl}>
                <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                    type='submit'
                >
                    Submit
                </Button>
                </div>
            </form>
        )}
        {!!filteredUsers.length ? (
            <Filter filteredUsers={filteredUsers}/>
        ) : (
            <PossibleConnections />
        )}
            </FormControl>
            </div>
        )}
        </div>
    )
}

export default UserInfo;