import React from 'react';
import './form-input.styles.scss';

function FormInput({ labelText, inputType, inputOptions }) {
    return (
        <div className='form-group'>
            <label htmlFor={inputOptions.id} className='form-input-label'>
                {labelText}
            </label>

            {inputType === '' ? 
                <input className='form-input' {...inputOptions} /> : 
                <textarea className='form-input-textarea' {...inputOptions} />
            }
        </div>
    );
}

export default FormInput;
