import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';

const UseStorage = (file) => {
    const [progress, setProgress] = useState();
    const [error, setError] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name);

        storageRef.put(file).on('state_change', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadUrl();
            setUrl(url)
        })
    }, [file])
    return { progress, url, error }
}
export default UseStorage;