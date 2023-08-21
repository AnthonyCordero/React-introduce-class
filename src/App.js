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
    }
  ]);

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

  //Lista de equipos

  const teamsInfo = [
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
  ]

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
        />
        )
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
