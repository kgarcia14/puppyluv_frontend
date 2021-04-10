import React, { useEffect } from 'react';
import useMessageStorage from '../../hook/useMessageStorage';
import { motion } from 'framer-motion';

const MessageProgressBar = ({ message, setMessage }) => {
    const { url, progress } = useMessageStorage(message);
    
    useEffect(() => {
        if (url) {
            setMessage(null);
        }
    }, [url, setMessage])

    return (
        <motion.div 
            className="u-progress-bar" 
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }} >

            </motion.div>
    )
}

export default MessageProgressBar;