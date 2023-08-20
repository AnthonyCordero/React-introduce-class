import './TeamOption.css'

const TeamOption = (props) => {

    //Método map -> areglo.map ((equipo, index) => {
    // return <option></option>
    // })

    const selectChange = (e) => {
        console.log('Change', e.target.value)
        props.setTeam(e.target.value)
    }
    return <div className='Team-option' >
        <label>Equipo</label>
        <select value={props.value} onChange={selectChange}>
            <option value='' disbled defaultValue='' hidden>Seleccionar Equipo</option>
            {props.teams.map((team, index) => <option key={index} value={team}>{team}</option>)}
        </select>
    </div >
}

export default TeamOption

