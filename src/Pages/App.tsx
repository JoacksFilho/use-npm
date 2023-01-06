import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';
import Cronometro from '../components/Cronometro';


// className - Utilizada pq class já é uma palavra reservada.
function App() {
  return (
    <div className={style.AppStyle}>   
      <Formulario/>
      <Lista/>
      <Cronometro/>
    </div>
  );
}

export default App;
