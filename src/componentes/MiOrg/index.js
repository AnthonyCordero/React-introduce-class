import { useState } from 'react'
import './MiOrg.css'
const MiOrg = (props) => {
    //Estado - hooks
    // useState
    // EJEMPLO
    // const [nombre, setNombre] = useState()

    // const [show, modShow] = useState(true)
    // const clickEvent = () => {
    //     console.log('Click to show / Click to hide', show)
    //     modShow(!show)
    // }

    return <section className="orgSection">
        <h3 className='title'>Mi Organización</h3>
        <img src='/img/add.png' atl='add' onClick={props.switchShowHide} />
    </section>
}

export default MiOrg