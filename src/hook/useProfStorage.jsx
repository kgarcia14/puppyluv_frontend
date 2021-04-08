import { useState, useEffect } from 'react';
import { storage, firestore, timestamp } from '../firebase/index';
import { useAuth0 } from '@auth0/auth0-react';

const useProfStorage = (image) => {
    const { user } = useAuth0();
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = storage.ref(image.name);
        const collectionRef = firestore.collection('prof ' + user.sub)
        storageRef.put(image).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt });
            setUrl(url);
        })
    }, [image, user.sub]);
    return { progress, url, error }
}

export default useProfStorage;