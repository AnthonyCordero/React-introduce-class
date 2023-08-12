import './Formulario.css'
import FormInput from '../FormInput/Index'


const Formulario = () => {
    return <section className='addForm'>
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <FormInput title='Nombre' placeholder='Ingresa el nombre' />
            <FormInput title='Puesto' placeholder='Agrega el puesto' />
            <FormInput title='Foto' placeholder='Coloca el link de la fotografía' />
        </form>
    </section>
}

export default Formulario