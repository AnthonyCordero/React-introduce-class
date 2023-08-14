import { useState } from 'react';
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';

function App() {
  const [showHideForm, setShowHideForm] = useState(true);

  // Ternario --> condicion ? seMuestra : noSeMuestra


  const switchShowHide = () => {
    setShowHideForm(!showHideForm)
  }

  return (
    <div>
      <Header />
      {/* {showHideForm === true ? <Formulario /> : <div></div>} */}
      {/* {showHideForm ? <Formulario /> : <></>} */}
      {showHideForm && <Formulario />}
      <MiOrg switchShowHide={switchShowHide} />
    </div>
  );
}

export default App;
