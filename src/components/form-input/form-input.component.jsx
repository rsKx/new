import React from 'react';

import './form-input.styles.css';

const FormImput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className='form-input' onChange={handleChange} {...otherProps} />
    </div>
)

export default FormImput;