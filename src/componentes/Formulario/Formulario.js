import { useState } from 'react'
import './Formulario.css'
import FormInput from '../FormInput/Index'
import TeamOption from '../TeamOption'
import FormButton from '../FormButton'



const Formulario = (props) => {
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [photo, setPhoto] = useState('')
    const [team, setTeam] = useState('')

    const sendData = (e) => {
        e.preventDefault()
        let sendData = {
            name,
            position,
            photo,
            team
        }
        console.log(sendData)
    }
    return <section className='addForm'>
        <form onSubmit={sendData}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <FormInput
                title='Nombre'
                placeholder='Ingresa el nombre'
                required
                value={name}
                setValue={setName} />
            <FormInput
                title='Puesto'
                placeholder='Agrega el puesto'
                required
                value={position}
                setValue={setPosition} />
            <FormInput
                title='Foto'
                placeholder='Coloca el link de la fotografía'
                required
                value={photo}
                setValue={setPhoto} />
            <TeamOption
                value={team}
                setTeam={setTeam}
                teams={props.team} />
            <FormButton>
                Agregar colaborador
            </FormButton>
        </form>
    </section>
}

export default Formulario