import './FormInput.css'
const FormInput = (props) => {
    console.log('Datos: ', props);
    const placeholderMod = `${props.placeholder}...`;
    return <div className='form-texto'>
        <label>{props.title}</label>
        <input placeholder={placeholderMod} required={props.required} />
    </div>
}

export default FormInput
