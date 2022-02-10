import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

function Modal ({ children, onClose }) {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown );

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    })
    

    function handleKeyDown(e) {
        if (e.code === 'Escape') {
            onClose();
        }
    }

    function handleBackdpropClick(e) {
        if(e.currentTarget === e.target) {
            onClose();
        }
    }

    return (
        <div className="Overlay" onClick={ handleBackdpropClick }>
            <div className="Modal" >
                { children }
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.object.isRequired,
    onClose: PropTypes.func,
}

export default Modal;