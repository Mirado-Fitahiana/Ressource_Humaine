import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Service from './Oni/Service';
import Accueil from './Oni/Accueil';
import Employes from './Oni/Employes';
import DetailService from './Oni/DetailService';
import Critere from './Mirado/Critere';
import Questionnaire from './Mirado/Questionnaire';
import Departement from './Oni/Departement';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Oni/Accueil" element={<Accueil />} />
        <Route path="/Oni/Service/:departementId" element={<Service />} />
        <Route path="/Oni/Employes" element={<Employes />} />
        <Route path="/Oni/DetailService/:serviceId" element={<DetailService />} />
        <Route path="/Oni/Departement" element={<Departement />} />
        <Route path="/Mirado/Critere" element={<Critere />} />
        <Route path="/Mirado/Questionnaire" element={<Questionnaire />} />
      </Routes>
    </Router>
  );
}

export default App;
