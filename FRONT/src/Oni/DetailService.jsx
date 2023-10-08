import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Accueil.css';
import MenuVertical from '../Back/MenuVertical';
import MenuHorizontal from '../Back/MenuHorizontal';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function DetailService() {
    return (
        <div className="container">
            <MenuHorizontal />
            <div className="input-container">
                <MenuVertical />
                <div className="form">
                    <ListeTâche />
                    <ModalTâche />
                </div>
            </div>

        </div>
    );

}
export function InputField({ type, label, options ,name}) {
    const [value, setValue] = useState(type === 'checkbox' ? false : options ? options[0] : '');

    const handleChange = (e) => {
        const newValue = type === 'checkbox' ? e.target.checked : e.target.value;
        setValue(newValue);
    };

    return (
        <div className="input-field">
            <label>{label}</label>
            {type === 'select' ? (
                <select value={value} onChange={handleChange}>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : (
                <input type={type} checked={type === 'checkbox' ? value : undefined} value={value} onChange={handleChange} name={name}/>
            )}
        </div>
    );
}

export function NumberInput({ label , name}) {
    const [value, setValue] = useState('');

    // Handle input change
    const handleChange = (e) => {
        const inputValue = e.target.value;
        // Use a regular expression to match only numeric characters
        const numericValue = inputValue.replace(/[^0-9]/g, '');
        setValue(numericValue);
    };

    return (
        <div>
            <label>{label}</label>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder=""
                name={name}
            />
        </div>
    );
}
function ListeTâche() {
    const { serviceId } = useParams();
    const [listTache,setListeTache] = useState(null);

    useEffect(() => {
        const fetchListTacheData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/tache-by-id/${serviceId}`);
                setListeTache(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données du tache :', error);
            }
        };
        fetchListTacheData();
    }, [serviceId]);
    const TâcheList = listTache ? listTache : [];


    return (
        <div className="Tâche-container">
            <h1>Nos Tâches</h1>
            <table className="Tâche-table">
                <thead>
                    <tr>
                        <th>Nom du Tâche</th>
                    </tr>
                </thead>
                <tbody>
                    {TâcheList.map((Tâche, index) => (
                        <tr key={index} className="Tâche-row">
                            <td>{Tâche.nom_tache}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


function ModalTâche() {
    const {serviceId} = useParams();
    console.log(serviceId);
    // État pour gérer la visibilité du modal et les données du formulaire
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [formData, setFormData] = useState({
      tache: '',
      duree: '',
      serviceId,
      
    });
    
    // Gestionnaire pour basculer la visibilité du modal
    const handleToggleModal = () => {
      setIsModalVisible(!isModalVisible);
    };
  
    // Gestionnaire pour mettre à jour les données du formulaire lors de la saisie
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    // Gestionnaire pour soumettre le formulaire (envoyer les données à Laravel)
    const handleSubmit = (e) => {
    console.log(formData);
      e.preventDefault();
  
      // Envoyer les données du formulaire à Laravel
      const apiUrl = 'http://localhost:8000/api/insert-tache';
      axios.post(apiUrl, formData, {
        headers: {
            'X-CSRF-TOKEN': '69uQlv0yjLZtnutDx8WpxLqRIr5ovIBb2nxnanNG'
        }
      })
        .then(response => {
          console.log('Données envoyées avec succès à Laravel:', response.data);
          // Réinitialiser le formulaire après l'envoi des données
          setFormData({
            tache: '',
            duree: '',
            serviceId
          });
          // Masquer le modal
          setIsModalVisible(false);
        })
        .catch(error => {
          console.error('Erreur lors de l\'envoi des données à Laravel:', error);
        });
    };
   
    
    return (
        <div>
            <Button variant="primary" onClick={handleToggleModal}>
                Nouvelle tâche
            </Button>
            {isModalVisible && (
                <div className="custom-modal">
                    <div className="modal-content">
                        <form  onSubmit={handleSubmit} >
                            <span className="close" onClick={handleToggleModal}>
                                &times;
                            </span>
                            <p>Nom de la tâche
                                <input type="text" name="tache" value={formData.tache} onChange={handleChange}/>
                            </p>
                            <p>Duree
                                <input type='number'  name="duree" value={formData.duree} onChange={handleChange} />
                            </p>
                            <button type='button' onClick={handleToggleModal}>Fermer</button>
                            <button type='submit' >Enregistrer</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
  }
export default DetailService;
