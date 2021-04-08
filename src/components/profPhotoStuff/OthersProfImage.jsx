import React from 'react';
import useFirestore from '../../hook/useFirestore'
import { motion } from 'framer-motion';


const OthersProfImage = ({ setSelectedImg,  fullProfile}) => {
    const { docs } = useFirestore('prof '+ fullProfile.user_nickname)
    console.log(docs);

    return(
        <div className="Prof-img">
            { docs && docs.map(doc => (
                <motion.div 
                    className="img-wrap" 
                    key={doc.id}
                    whileHover={{ opacity: 1 }}
                    layout
                    onClick={() => setSelectedImg(doc.url)}>
                    <motion.img 
                        src={doc.url} 
                        alt="uploaded pic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }} />
                </motion.div>
            ))}
        </div>
    )
}

export default OthersProfImage;