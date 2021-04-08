import React from 'react';
import { motion } from 'framer-motion';

const PhotoModal = ({ setSelectedImg, selectedImg }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    };

    return (
        <motion.div 
            className="backdrop" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleClick}>
            <motion.img 
                src={selectedImg} 
                alt="pic in a modal"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }} />
        </motion.div>
    )
}

export default PhotoModal;