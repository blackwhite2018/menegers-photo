import React from 'react';
import PropTypes from 'prop-types';
import Img from './Img/Img';

const FileWrapper = ({ files, handleRemoveImage }) => {
    return (
        <div className="file-wrapper">
            {
                files.map(({ _id, src }) => (
                    <Img
                        key={_id}
                        src={src}
                        handleRemoveImage={handleRemoveImage}
                    />
                ))
            }
        </div>
    );
};

FileWrapper.propTypes = {
    props: PropTypes.shape({
        files: PropTypes.array.isRequired,
        handleRemoveImage: PropTypes.func.isRequired
    })
};

export default FileWrapper;

