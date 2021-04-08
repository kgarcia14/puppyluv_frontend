import { useState, useEffect } from 'react';
import { storage, Storage } from '../firebase/index';

const UseStorage = ({image}) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = Storage.ref(image.name);

        storageRef.put(image).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        })
    }, [image]);
    return { progress, url, error}
}

