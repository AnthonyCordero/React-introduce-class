import './styles.css'
import Coworker from '../Coworker'


const Team = (props) => {
    //Destructuracion
    const { title, primaryColor, secondaryColor } = props.teamData
    const { coworkers } = props
    const teamSectionBG = { backgroundColor: secondaryColor }
    const underLineColor = { borderColor: primaryColor }

    return <>
        {
            coworkers.length > 0 &&
            < section className="teamSection" style={teamSectionBG} >
                <h3 style={underLineColor}>{title}</h3>
                <div className="colleagues">
                    {coworkers.map((coworker, index) => <Coworker
                        data={coworker}
                        key={index}
                        primaryColor={primaryColor}
                    />)
                    }
                </div>
            </section >
        }
    </>
}

export default Team