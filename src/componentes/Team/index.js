import './styles.css'
import Coworker from '../Coworker'


const Team = (props) => {
    //Destructuracion
    const { title, primaryColor, secondaryColor } = props.teamData
    const teamSectionBG = { backgroundColor: secondaryColor }
    const underLineColor = { borderColor: primaryColor }

    return <section className="teamSection" style={teamSectionBG}>
        <h3 style={underLineColor}>{title}</h3>
        <div className="colleagues">
            <Coworker />
        </div>
    </section>
}

export default Team