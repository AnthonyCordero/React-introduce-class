import './Formulario.css'
import FormInput from '../FormInput/Index'
import TeamOption from '../TeamOption'
import FormButton from '../FormButton'



const Formulario = () => {

    const sendData = (e) => {
        e.preventDefault()
        console.log('Enviado', e)
    }
    return <section className='addForm'>
        <form onSubmit={sendData}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <FormInput title='Nombre' placeholder='Ingresa el nombre' required />
            <FormInput title='Puesto' placeholder='Agrega el puesto' required />
            <FormInput title='Foto' placeholder='Coloca el link de la fotografía' required />
            <TeamOption />
            <FormButton>
                Agregar colaborador
            </FormButton>
        </form>
    </section>
}

export default Formulario