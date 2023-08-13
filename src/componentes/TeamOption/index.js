import './TeamOption.css'

const TeamOption = () => {

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

    return <div className='Team-option' >
        <label>Equipo</label>
        <select>
            {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default TeamOption

