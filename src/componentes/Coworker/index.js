import './styles.css'
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const Coworker = (props) => {
    const { name, position, photo, team, id, fav } = props.data
    const { primaryColor, deleteCoworker, like } = props

    return <div className='coworker'>
        <AiFillCloseCircle className='delete' onClick={() => deleteCoworker(id)} />
        <div className='coworkertittle' style={{ backgroundColor: primaryColor }}>
            <img src={photo} alt={name} />
        </div>
        <div className='info'>
            <h4>{name}</h4>
            <h5>{position}</h5>
            {fav ? <AiFillHeart color='red' onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />}
        </div>
    </div>
}

export default Coworker