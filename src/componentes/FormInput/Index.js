import { useState } from 'react';
import './FormInput.css'

const FormInput = (props) => {
    const [value, setValue] = useState('');
    const placeholderMod = `${props.placeholder}...`;

    const { type = 'text' } = props;

    const inputValueChange = (e) => {
        props.setValue(e.target.value)

    }
    return <div className='form-input color-input'>
        <label>{props.title}</label>
        <input
            placeholder={placeholderMod}
            required={props.required}
            value={props.value}
            onChange={inputValueChange}
            type={type}
        />

    </div>
}

export default FormInput
