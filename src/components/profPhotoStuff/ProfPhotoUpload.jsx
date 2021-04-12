import React, {useState} from 'react';
import ProfProgressBar from './ProfProgressBar';
import Styled from 'styled-components';

const Label = Styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = Styled.form`
    margin-bottom: 100px;
`;

const PetPhotoUpload = () => {
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
        <Form>
            <Label>
                Upload a profile picture
            <div>
            <input 
                type="file" 
                onChange={handleChange} />
            
            <div className="output">
                { error && <div className="error">{ error }</div> }
                { image && <div>{ image.name }</div> }
                { image && <ProfProgressBar image={image} setImage={setImage} /> }
            </div>
            </div>
            </Label>
        </Form>
        
    )
}
export default PetPhotoUpload;