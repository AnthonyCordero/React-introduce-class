import './styles.css'
import Coworker from '../Coworker'
import hexToRgba from 'hex-to-rgba';


const Team = (props) => {
    //Destructuracion
    const { title, primaryColor, secondaryColor } = props.teamData
    const { coworkers, deleteCoworker, updateColor } = props
    const teamSectionBG = { backgroundColor: hexToRgba(primaryColor, 0.3) }
    const underLineColor = { borderColor: primaryColor }

    return <>
        {
            coworkers.length > 0 &&
            < section className="teamSection" style={teamSectionBG} >
                <input
                    type='color'
                    className='input-color'
                    value={primaryColor}
                    onChange={(e) => { updateColor(e.target.value, title) }}
                />
                <h3 style={underLineColor}>{title}</h3>
                <div className="colleagues">
                    {coworkers.map((coworker, index) => <Coworker
                        data={coworker}
                        key={index}
                        primaryColor={primaryColor}
                        deleteCoworker={deleteCoworker}
                    />)
                    }
                </div>
            </section >
        }
    </>
}

export default Team