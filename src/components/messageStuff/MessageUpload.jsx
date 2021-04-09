import React, {useState} from 'react';
import MessageProgressBar from './MessageProgressBar';
import Styled from 'styled-components';

const Label = Styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Div = Styled.div`
`;

const MessageUpload = () => {
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = async (e) => {
        let selected = e;

        if (selected) {
            setMessage(selected);
            setError('')
        } else {
            setMessage(null);
            setError("You can't send an empty message")
        }
    }; 

    return (
        <form>
            <Label>
            <Div>
            <textarea
                onChange={handleChange} />
            <button 
                type="submit">
                Send
            </button>
            <div className="output">
                { error && <div className="error">{ error }</div> }
                { message && <div>{ message.name }</div> }
                { message && <MessageProgressBar message={message} setMessage={setMessage} /> }
            </div>
            </Div>
            </Label>
        </form>
        
    )
}
export default MessageUpload;