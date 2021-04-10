import React from 'react';
import useFirestore from '../../hook/useFirestore'
import { motion } from 'framer-motion';


const FilterThumbPhoto = ({ fUser}) => {
    const { docs } = useFirestore('prof '+ fUser.user_nickname)
    console.log(docs);

    return(
        <div className="Prof-img">
            { docs && docs.map(doc => (
                <motion.div 
                    className="img-wrap" 
                    key={doc.id}
                    whileHover={{ opacity: 1 }}
                    layout>
                    <motion.img 
                        src={doc.url} 
                        alt="uploaded pic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                         />
                </motion.div>
            ))}
        </div>
    )
}

export default FilterThumbPhoto;