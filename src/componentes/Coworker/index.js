import './styles.css'

const Coworker = (props) => {
    const { name, position, photo, team } = props.data
    const { primaryColor } = props

    return <div className='coworker'>
        <div className='coworkertittle' style={{ backgroundColor: primaryColor }}>
            <img src={photo} alt={name} />
        </div>
        <div className='info'>
            <h4>{name}</h4>
            <h5>{position}</h5>
        </div>
    </div>
}

export default Coworker