import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import Registerpet1 from './RegisterPet1';
import Registerpet2 from './RegisterPet2';
import Registerpet3 from './RegisterPet3';
import AboutUs from './AboutUs';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Cabin",
    },
}));

const PetRegister = ({handleReload, reload}) => {
    const { user } = useAuth0();
    const [numbPet, setNumbPet] = useState('');
    const [pet1, setPet1] = useState('');
    const [pet2, setPet2] = useState('');
    const [pet3, setPet3] = useState('');
    console.log("we are here")
    console.log('numbPet is:', numbPet)

    useEffect(() => {
        (async () => {
            const apiUrl = `http://127.0.0.1:3333/users/${user.sub}`
            const usersData = await fetch(apiUrl).then(response => response.json());
            setNumbPet(usersData.numb_pets)
            setPet1(usersData.pet_name1)
            setPet2(usersData.pet_name2)
            setPet3(usersData.pet_name3)
            
        })();
    }, [user.sub, reload])

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
        {numbPet === 1 && (
            <Registerpet1 handleReload={handleReload} pet1={pet1} />
        )}

        {numbPet === 2 && (
            <>
                <Registerpet1 handleReload={handleReload} pet1={pet1} />
                <Registerpet2 handleReload={handleReload} pet1={pet1} pet2={pet2} />
            </>
        )}

        {numbPet === 3 && (
            <>
                <Registerpet1 handleReload={handleReload} pet1={pet1} />
                <Registerpet2 handleReload={handleReload} pet1={pet1} pet2={pet2} />
                <Registerpet3 handleReload={handleReload} pet1={pet1} pet2={pet2} pet3={pet3} />
            </>
        )}

        {numbPet === 0 && (
            <>
                <p>We are sincerely sorry for you loss, please tell us about you and your lost pup</p>
                <AboutUs handleReload={handleReload} />
            </>
        )}

        {pet1 !== null && numbPet === 1 &&(
            <AboutUs handleReload={handleReload} />
        )}

        {pet1 !== null && pet2 !== null && numbPet === 2 && (
            <AboutUs handleReload={handleReload} />
        )}

        {pet1 !== null && pet2 !== null && pet3 !== null && numbPet === 3 && (
            <AboutUs handleReload={handleReload} />
        )}
        </div>
    )
}

export default PetRegister;