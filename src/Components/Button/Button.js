import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ onButtonClick }) {
    return (
        <button className='Button' type='button' onClick={ onButtonClick }>Load more</button>
    )
}

Button.propTypes = {
    onButtonClick: PropTypes.func,
}

export default Button;