import React from 'react';
import useFirestore from '../../hook/useFirestore'
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';

const ProfImage = ({ setSelectedImg }) => {
    const { user } = useAuth0();
    const { docs } = useFirestore('prof '+ user.sub)
    console.log(docs);

    return(
        <div className="Prof-img" >
            { docs && docs.map(doc => (
                <motion.div 
                    className="img-wrap" 
                    key={doc.id}
                    whileHover={{ opacity: 1 }}
                    layout
                    onClick={() => setSelectedImg(doc.url)}>
                    <motion.img
                        className="profile-pic"
                        src={doc.url} 
                        alt="uploaded pic"
                        initial={{ opacity: 2 }}
                        animate={{ opacity: 2 }}
                        transition={{ delay: 1 }} />
                </motion.div>
            ))}
        </div>
    )
}

export default ProfImage;