import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import Registerpet1 from './petRegistry/RegisterPet1';
import Registerpet2 from './petRegistry/RegisterPet2';
import Registerpet3 from './petRegistry/RegisterPet3';
import AboutUs from './AboutUs';

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

    return (
        <>
        {numbPet === 1 ? (
            <Registerpet1 handleReload={handleReload} pet1={pet1} />
        ) : (
            <>
            </>
        )}

        {numbPet === 2 ? (
            <>
                <Registerpet1 handleReload={handleReload} pet1={pet1} />
                <Registerpet2 handleReload={handleReload} pet1={pet1} pet2={pet2} />
            </>
        ) : (
            <>
            </>
        )}

        {numbPet === 3 ? (
            <>
                <Registerpet1 handleReload={handleReload} pet1={pet1} />
                <Registerpet2 handleReload={handleReload} pet1={pet1} pet2={pet2} />
                <Registerpet3 handleReload={handleReload} pet1={pet1} pet2={pet2} pet3={pet3} />
            </>
        ) : (
            <>
            </>
        )}
        {pet1 !== null && pet2 !== null && pet3 !== null ? (
            <AboutUs handleReload={handleReload} />
        ) : (
            <>
            </>
        )}
        </>
    )
}

export default PetRegister;