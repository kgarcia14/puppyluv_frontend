import { useState, useEffect } from 'react'
import { Form, Label, Select } from '../profileStuff/UserRegister'

const Filter = () => {
    const [filter, setFilter] = useState('')

    
    const _handleFilterChange = async (e) => {
        setFilter(e.target.value)
    }

    const _handleFilterSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = `http://127.0.0.1:3333/users/Filter/${filter}`;
        const filterData = await fetch(apiUrl, ).then(response => response.json());
        setFilter(filterData);
    }

    return (
        
        <>
            <Form onSubmit={_handleFilterSubmit}>
                <Label>Filter
                    <Select 
                        type="text"
                        name="filter"
                        value={filter}
                        onChange={_handleFilterChange}>
                        <option value="">Filter By</option>
                        <option value="age"></option>
                        <option value="gender"></option>
                        <option value="numb_pets"></option>
                        <option value=""></option>
                    </Select>
                </Label>
            </Form>
        </>
    )
}

export default Filter