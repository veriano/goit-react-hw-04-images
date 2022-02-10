import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

function ImageGalleryItem({ image, largeImage, tags, onModal }) {

    return (
        <>
            <li className="ImageGalleryItem">
            <img src={ image } 
            alt={ tags } className="ImageGalleryItem-image" 
            onClick={() => onModal(largeImage)} />
            </li>
        </>
    )

}

ImageGalleryItem.propTypes = {
    image: PropTypes.string,
    largeImage: PropTypes.string,
    tags: PropTypes.string,
    onModal: PropTypes.func,
}

export default ImageGalleryItem;
