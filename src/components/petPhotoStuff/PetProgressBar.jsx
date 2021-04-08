import React, { useEffect } from 'react';
import useStorage from '../../hook/useStorage';
import { motion } from 'framer-motion';

const PetProgressBar = ({ image, setImage }) => {
    const { url, progress } = useStorage(image);
    
    useEffect(() => {
        if (url) {
            setImage(null);
        }
    }, [url, setImage])

    return (
        <motion.div 
            className="u-progress-bar" 
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }} >

            </motion.div>
    )
}

export default PetProgressBar;