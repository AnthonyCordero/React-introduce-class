import './Formulario.css'
import FormInput from '../FormInput/Index'
import TeamOption from '../TeamOption'
import FormButton from '../FormButton'



const Formulario = () => {

    const sendData = (event) => {
        event.preventDefault()
        console.log('Enviado', event)
    }
    return <section className='addForm'>
        <form onSubmit={sendData}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <FormInput title='Nombre' placeholder='Ingresa el nombre' />
            <FormInput title='Puesto' placeholder='Agrega el puesto' />
            <FormInput title='Foto' placeholder='Coloca el link de la fotografía' />
            <TeamOption />
            <FormButton>
                Agregar colaborador
            </FormButton>
        </form>
    </section>
}

export default Formulario