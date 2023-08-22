import './styles.css'
import Coworker from '../Coworker'
import hexToRgba from 'hex-to-rgba';


const Team = (props) => {
    //Destructuracion
    const { title, primaryColor, secondaryColor, id } = props.teamData
    const { coworkers, deleteCoworker, updateColor, like } = props
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
                    onChange={(e) => { updateColor(e.target.value, id) }}
                />
                <h3 style={underLineColor}>{title}</h3>
                <div className="colleagues">
                    {coworkers.map((coworker, index) => <Coworker
                        data={coworker}
                        key={index}
                        primaryColor={primaryColor}
                        deleteCoworker={deleteCoworker}
                        like={like}
                    />)
                    }
                </div>
            </section >
        }
    </>
}

export default Team