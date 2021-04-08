import React, {useState} from 'react';
import PetProgressBar from './PetProgressBar';

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
        <form>
            <label>
                Upload some photos of your fury friends
            <input 
                type="file" 
                required
                onChange={handleChange} />
            <div 
                className="output">
                { error && <div className="error">{ error }</div> }
                { image && <div>{ image.name }</div> }
                { image && <PetProgressBar image={image} setImage={setImage} /> }
            </div>
            </label>
        </form>
    )
}
export default PetPhotoUpload;