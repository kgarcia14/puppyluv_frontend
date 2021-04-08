import React, {useState} from 'react';
import { storage } from '../../firebase';
import styled from 'styled-components';
import {Button } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import { SentimentSatisfiedAlt } from '@material-ui/icons';

const Upload = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: 0 auto;
    progress {
        margin: 0 auto;
    }
`;
const UploadPhoto = () => {
    const { user } = useAuth0();
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const handleChange = async (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setImage(selected);
            setError('')
        } else {
            setImage(null);
            setError('Please select an image file of (png or jpeg)')
        }
    }; 

    return (
        <form>
            <input 
                type="file" 
                onChange={handleChange} />
            <div 
                className="output">
                {error && <div className="error">{ error }</div> }
                { image && <div>{ image.name }</div> }
            </div>
        </form>
    )
}
export default UploadPhoto;