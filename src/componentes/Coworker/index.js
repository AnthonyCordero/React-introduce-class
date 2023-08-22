import './styles.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const Coworker = (props) => {
    const { name, position, photo, team, id } = props.data
    const { primaryColor, deleteCoworker } = props

    return <div className='coworker'>
        <AiFillCloseCircle className='delete' onClick={() => deleteCoworker(id)} />
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