import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const FileReaderForm = ({ handleGetUrlsImage }) => {
    const fileRef = useRef();

    const fileToDataUrl = file => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.addEventListener('load', evt => {
                resolve(evt.currentTarget.result);
            });

            fileReader.addEventListener('error', evt => {
                reject(new Error(evt.currentTarget.error));
            });

            fileReader.readAsDataURL(file);
        });
    };

    const handleSelect = async evt => {
        evt.preventDefault();
        const files = [...fileRef.current.files];
        const urls = await Promise.all(files.map(file => fileToDataUrl(file)));
        handleGetUrlsImage(urls);
    };

    return (
        <div className="file-reader">
            <form className="form">
                <input
                    type="file"
                    className="form__file"
                    ref={fileRef}
                    onChange={handleSelect}
                />
                <div className="stub">Click to Select</div>
            </form>
        </div>
    );
};

FileReaderForm.propTypes = {
    props: PropTypes.shape({
        handleGetUrlsImage: PropTypes.func.isRequired
    })
};

export default FileReaderForm;

