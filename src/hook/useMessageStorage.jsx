import { useState, useEffect } from 'react';
import { storage, firestore, timestamp } from '../firebase/index';
import { useAuth0 } from '@auth0/auth0-react';

const useMessageStorage = (message, otherUser) => {
    const { user } = useAuth0();
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = storage.ref(message.name);
        const collectionRef = firestore.collection('message ' + user.sub + 'to' + otherUser)
        storageRef.add(message).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const text = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ text, createdAt });
            setUrl(url);
        })
    }, [message, user.sub, otherUser]);
    return { progress, url, error }
}

export default useMessageStorage;