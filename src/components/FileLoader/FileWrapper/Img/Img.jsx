import React from 'react';
import PropTypes from 'prop-types';

const Img = ({ src, handleRemoveImage }) => {

    const handleClick = evt => {
        handleRemoveImage(src);
    };

    return (
        <figure className="img-box">
            <img
                className="file-wrapper__img"
                alt='...'
                src={src}
            />
            <button onClick={handleClick} className="img-box__remove" aria-label="delete image">
                <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
        </figure>
    )
};

Img.propTypes = {
    props: PropTypes.shape({
        src: PropTypes.string.isRequired,
        handleRemoveImage: PropTypes.func.isRequired
    })
};

export default Img;

