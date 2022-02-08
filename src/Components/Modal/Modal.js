import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown );
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown );
    }

    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdpropClick = e => {
        if(e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render() {
        const { children } = this.props;

        return (
        <div className="Overlay" onClick={ this.handleBackdpropClick }>
            <div className="Modal" >
                { children }
            </div>
        </div>
        )
    }
}

Modal.propTypes = {
    children: PropTypes.object.isRequired,
}

export default Modal;