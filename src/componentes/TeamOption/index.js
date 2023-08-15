import './TeamOption.css'

const TeamOption = (props) => {

    //Método map -> areglo.map ((equipo, index) => {
    // return <option></option>
    // })

    const equipos = [
        'Programación',
        'Front End',
        'Data Science',
        'DevOps',
        'UX/UI',
        'Mobile',
        'Innovación y Gestión',
    ]

    const selectChange = (e) => {
        console.log('Change', e.target.value)
        props.setValue(e.target.value)
    }

    return <div className='Team-option' >
        <label>Equipo</label>
        <select value={props.value} onChange={selectChange}>
            <option value='' disbled defaultValue='' hidden>Seleccionar Equipo</option>
            {equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div >
}

export default TeamOption

