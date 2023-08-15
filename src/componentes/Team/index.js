import './styles.css'
const Team = (props) => {

    //Destructuracion
    const { title, primaryColor, secondaryColor } = props.teamData
    const teamSectionBG = { backgroundColor: secondaryColor }
    const underLineColor = { borderColor: primaryColor }

    return <section className="teamSection" style={teamSectionBG}>
        <h3 style={underLineColor}>{title}</h3>
        <div className="colleagues">

        </div>
    </section>
}

export default Team