import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Service.css';
import '../Back/Menu.css';
import MenuVertical from '../Back/MenuVertical';
import MenuHorizontal from '../Back/MenuHorizontal';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import {NumberInput, InputField} from './DetailService'
//import Critere from '../Mirado/Critere';
function Service() {
    return (
        <div className="container">
            <MenuHorizontal />
            <div className="input-container">
                <MenuVertical />
                <div className="form">
                    <ListeService />
                    <ModalRecutement />
                </div>
            </div>

        </div>
    );
}


function ListeService() {
  // select dept by id
  const { departementId } = useParams();
  console.log(departementId);
  const [departementData, setDepartementData] = useState(null);

  useEffect(() => {
    const fetchDepartementData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/services/${departementId}`);
        setDepartementData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données du   département :', error);
      }
    };

    fetchDepartementData();
  }, [departementId]);


  const servicesList = departementData ? departementData : [];
   
    
      return (
        <div className="service-container">
          <table className="service-table">
            <thead>
              <tr>
                <th>Departement</th>
                <th>Nom du Service</th>
              </tr>
            </thead>
            <tbody>
              {servicesList.map((service, index) => (
                <tr key={index} className="service-row">
                  <td>{service.nom_departement}</td>
                  <td>{service.nom_service}</td>
                  <td><Link to={`/Oni/DetailService/${service.id_service}`} className="custom-link">Détails</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
  
function ModalRecutement() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const initialOptions = ['Option 1', 'Option 2', 'Option 3'];
  const [selectedOptions, setSelectedOptions] = useState([initialOptions[0]]);
  const [dureeTache, setDureeTache] = useState('');

  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleAddOption = () => {
    if (selectedOptions.length >= initialOptions.length) {
      return;
    }

    const nextOption = initialOptions.find((option) => !selectedOptions.includes(option));
    const newOptions = [...selectedOptions, nextOption];
    setSelectedOptions(newOptions);
  };

  const handleOptionChange = (e, index) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[index] = e.target.value;
    setSelectedOptions(updatedOptions);
  };

  const handleDeleteOption = (index) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions.splice(index, 1);
    setSelectedOptions(updatedOptions);
  };

  const handleDureeTacheChange = (e) => {
    setDureeTache(e.target.value);
  };

  const handleSubmit = () => {
    // You can now access the selected values and the task duration here
    console.log('Options sélectionnées :', selectedOptions);
    console.log('Durée de la tâche :', dureeTache);

    // Add your redirection logic here if needed
  };

  return (
    <div>
      <Button variant="primary" onClick={handleToggleModal}>
        Recruter
      </Button>

      {isModalVisible && (
        <div className="custom-modal">
          <div className="modal-content">
            <span className="close" onClick={handleToggleModal}>
              &times;
            </span>
            <p>
              {selectedOptions.map((option, index) => (
                <div key={index} className="task-container">
                  <InputField
                    type="select"
                    label={`Tâche à faire ${index + 1}`}
                    options={initialOptions}
                    onChange={(e) => handleOptionChange(e, index)}
                    value={option}
                  />
                  <button onClick={() => handleDeleteOption(index)}>Supprimer</button>
                </div>
              ))}
              {selectedOptions.length < initialOptions.length && (
                <button onClick={handleAddOption}>+</button>
              )}
            </p>
            <p>
              <NumberInput label="Durée de tâche" onChange={handleDureeTacheChange} value={dureeTache} />
            </p>
            <button type='submit'>
              <Link to="/Mirado/Critere" onClick={handleSubmit} className="custom-link">Suivant</Link>
            </button>
            <button type='submit' onClick={handleToggleModal}>Annuler</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Service;
