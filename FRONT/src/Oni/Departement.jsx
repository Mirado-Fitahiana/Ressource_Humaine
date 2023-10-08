import React, { useState } from 'react';
import './Service';
import '../Back/Menu.css';
import MenuVertical from '../Back/MenuVertical';
import MenuHorizontal from '../Back/MenuHorizontal';
import { Link } from 'react-router-dom';
//import Critere from '../Mirado/Critere';
function Departement() {
    return (
        <div className="container">
            <MenuHorizontal />
            <div className="input-container">
                <MenuVertical />
                <div className="form">
                    {/* <InputField type="text" label="Text Input" />
                    <InputField type="number" label="Number Input" />
                    <InputField type="checkbox" label="Checkbox Input" />
                    <InputField type="radio" label="Radio Input" options={['Option 1', 'Option 2']} />
                    <InputField type="select" label="Select Input" options={['Option 1', 'Option 2', 'Option 3']} /> */}
                    <ListeDepartement />
                </div>
            </div>

        </div>
    );
}


function ListeDepartement() {
    const DepartementList = [
        { name: 'Departement 1', description: 'Description du Departement 1' },
        { name: 'Departement 2', description: 'Description du Departement 2' },
        { name: 'Departement 3', description: 'Description du Departement 3' },
        { name: 'Departement 4', description: 'Description du Departement 4' },
      ];
    
      return (
        <div className="Departement-container">
          <h1>Nos Departements</h1>
          <table className="Departement-table">
            <thead>
              <tr>
                <th>Nom du Departement</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {DepartementList.map((Departement, index) => (
                <tr key={index} className="Departement-row">
                  <td>{Departement.name}</td>
                  <td>{Departement.description}</td>
                  <td><Link to="/Oni/DetailDepartement" className="custom-link">Détails</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
export default Departement;
