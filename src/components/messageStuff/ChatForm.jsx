import React, {useState} from 'react';
import Styled from 'styled-components';

const Label = Styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Div = Styled.div`
`;
const ChatForm = () => {
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

    const _handleMessageSubmit = async (e) => {
        e.preventDefalult()

    }
    return (
        <form onSubmit={_handleMessageSubmit}>
            <Label>
                <Div>
                <textarea
                    onChange={handleChange} />
                <button 
                    type="submit">
                    Send
                </button>
                </Div>
            </Label>
        </form>
    )
}

export default ChatForm;