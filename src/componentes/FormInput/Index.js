import './FormInput.css'
const FormInput = (props) => {
    console.log('Datos: ', props.titulo);
    const placeholderMod = `${props.placeholder}...`;
    return <div className='form-texto'>
        <label>{props.title}</label>
        <input placeholder={placeholderMod} />
    </div>
}

export default FormInput
