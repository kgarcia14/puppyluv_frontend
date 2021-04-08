import React, { useEffect } from 'react';
import useProfStorage from '../../hook/useProfStorage';
import { motion } from 'framer-motion';

const ProfProgressBar = ({ image, setImage }) => {
    const { url, progress } = useProfStorage(image);
    
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

export default ProfProgressBar;