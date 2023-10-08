import React, { useState } from 'react';
import './Service';

import MenuVertical from '../Back/MenuVertical';
import MenuHorizontal from '../Back/MenuHorizontal';
function Employes() {
    return (
        <div className="container">
            <MenuHorizontal />
            <div className="input-container">
                <MenuVertical />
                <div className="form">
                    <ListeEmploye />
                </div>
            </div>

        </div>
    );
}

function ListeEmploye() {
    const EmployeList = [
        { name: 'Employe 1', description: 'Description du Employe 1' },
        { name: 'Employe 2', description: 'Description du Employe 2' },
        { name: 'Employe 3', description: 'Description du Employe 3' },
        { name: 'Employe 4', description: 'Description du Employe 4' },
      ];
    
      return (
        <div className="Employe-container">
          <h1>Nos Employes</h1>
          <table className="Employe-table">
            <thead>
              <tr>
                <th>Nom du Employe</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {EmployeList.map((Employe, index) => (
                <tr key={index} className="Employe-row">
                  <td>{Employe.name}</td>
                  <td>{Employe.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
export default Employes;
