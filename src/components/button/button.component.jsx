import React from 'react';
import './button.styles.scss';

function Button({ buttonText, type, ...otherProps }) {
    return (
        <button 
            className='button-container' 
            type={type} 
            {...otherProps} 
        >
            {buttonText}
        </button>
    )
}

export default Button;
