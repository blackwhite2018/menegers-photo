import React, { useState } from 'react';
import shortid from 'shortid';
import './FileLoader.css';
import FileReaderForm from './FileReaderForm/FileReaderForm';
import FileWrapper from './FileWrapper/FileWrapper';

const FileLoader = () => {
    const [urls, setImages] = useState([]);

    const handleGetUrlsImage = urls => {
        const urlsIds = urls.reduce((acc, url) => {
            return [
                ...acc,
                {
                    _id: shortid.generate(),
                    src: url
                }
            ];
        }, []);
        setImages(prevValue => {
            return [
                ...prevValue,
                ...urlsIds
            ];
        });
    };

    const handleRemoveImage = src => {
        const cloneUrls = [...urls];
        setImages(cloneUrls.filter(url => url.src !== src));
    };

    return (
        <div className="container">
            <FileReaderForm
                handleGetUrlsImage={handleGetUrlsImage}
            />
            <FileWrapper
                files={urls}
                handleRemoveImage={handleRemoveImage}
            />
        </div>
    );
};

export default FileLoader;

