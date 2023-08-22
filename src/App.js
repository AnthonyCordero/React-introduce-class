import { useState } from 'react';
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Team from './componentes/Team';
import Footer from './componentes/Footer';

function App() {
  const [showHideForm, setShowHideForm] = useState(true);

  const [coworkers, updateCoworwers] = useState([
    {
      name: "Anthony Cordero",
      position: "Programador",
      photo: "https://github.com/AnthonyCordero.png",
      team: "Front End"
    },
    {
      name: "Genesys Rondón",
      position: "Desarrolladora de software e instructora",
      photo: "https://scontent.fsyq1-1.fna.fbcdn.net/v/t39.30808-6/369161947_6347246988716822_473931346132967735_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6qcwtDBjk2IAX_e7gsW&_nc_ht=scontent.fsyq1-1.fna&oh=00_AfDgdql2OL-tvcU0WHN9Dxp7cvpWxdz0IMzTcgs5IBFNnw&oe=64E8CA1F",
      team: "Front End"
    },
    {
      name: "Jeanmarie Quijada",
      position: "Instructora en Alura Latam",
      photo: "https://github.com/JeanmarieAluraLatam.png",
      team: "Front End"
    },
    {
      name: "Jose Gonzalez",
      position: "Dev. FullStack",
      photo: "https://github.com/JoseDarioGonzalezCha.png",
      team: "Data Science"
    },
    {
      name: "Harland Lohora",
      position: "Intructor",
      photo: "https://github.com/harlandlohora.png",
      team: "Front End"
    },
    {
      name: "Jeanmarie Quijada",
      position: "Instructora en Alura Latam",
      photo: "https://github.com/AnthonyCordero.png",
      team: "Innovación y Gestión"
    },
    {
      name: "Christian Velasco",
      position: "Head de Alura e instructor",
      photo: "https://github.com/christianpva.png",
      team: "Móvil"
    },

  ]);

  const [teamsInfo, updateTeamsInfo] = useState([
    {
      title: 'Programación',
      primaryColor: '#57C278 ',
      secondaryColor: '#D9F7E9'
    },
    {
      title: 'Front End',
      primaryColor: '#82CFFA ',
      secondaryColor: '#E8F8FF'
    },
    {
      title: 'Data Science',
      primaryColor: '#A6D157 ',
      secondaryColor: '#F0F8E2'
    },
    {
      title: 'Devops',
      primaryColor: '#E06B69 ',
      secondaryColor: '#FDE7E8'
    },
    {
      title: 'UX y Diseño',
      primaryColor: ' #DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      title: 'Móvil',
      primaryColor: ' #FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      title: 'Innovación y  Gestión',
      primaryColor: ' #FF8A29',
      secondaryColor: '#FFEEDF'
    },
  ])

  // Ternario --> condicion ? seMuestra : noSeMuestra
  const switchShowHide = () => {
    setShowHideForm(!showHideForm)
  }

  //CoworkerRegistration

  const coworkerRegistration = (coworker) => {
    console.log('Nuevo Colaborador', coworker);
    //SpreadOperator
    updateCoworwers([...coworkers, coworker])
  }

  // Eliminar Colaborador

  const deleteCoworker = () => {
    console.log('Eliminar');
  }

  // Actualizad Color de Equipo

  const updateColor = (color, title) => {
    console.log('Acualizar: ', color, title);
    const updatedTeamsColor = teamsInfo.map((team) => {
      if (team.title === title) {
        team.primaryColor = color;
      }
      return team;
    });

    updateTeamsInfo(updatedTeamsColor);
  };


  return (
    <div>
      <Header />
      {/* {showHideForm === true ? <Formulario /> : <div></div>} */}
      {/* {showHideForm ? <Formulario /> : <></>} */}
      {
        showHideForm && <Formulario
          team={teamsInfo.map((team) => team.title)}
          coworkerRegistration={coworkerRegistration}
        />
      }

      <MiOrg switchShowHide={switchShowHide} />

      {
        teamsInfo.map((defTeam) => <Team
          teamData={defTeam}
          key={defTeam.title}
          coworkers={coworkers.filter(coworker => coworker.team === defTeam.title)}
          deleteCoworker={deleteCoworker}
          updateColor={updateColor}
        />
        )
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
