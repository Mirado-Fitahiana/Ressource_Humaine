import './Accueil.css';
//import './Menu.css';
import MenuVertical from '../Back/MenuVertical';
import MenuHorizontal from '../Back/MenuHorizontal';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Login from '../Mirado/Login';
//import Critere from '../Mirado/Critere';
function Accueil() {
    var path = null;
    const [departements, setDepartements] = useState([]);
    useEffect(() => {
        const fetchDepartements = async () => {
            try {
                const response = await axios.get('http://localhost:8000/departements'); // Remplacez par votre URL API
                setDepartements(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données des départements :', error);
            }
        };

        fetchDepartements();
    }, []);
    const departementsList = departements ? departements : [];
    
    //   modal

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleCardClick = (departement) => {
        // Mettez à jour le contenu du modal avec les informations du département
        setModalContent(`Abbréviation : ${departement.abreviation}, Nom : ${departement.nom_departement}`);
        // Ouvrir le modal
        setIsModalOpen(true);
    };

    const closeModal = () => {
        // Fermer le modal
        setIsModalOpen(false);
    };
    return (
        <div className="container">
            <MenuHorizontal />
            <div className="input-container">
                <MenuVertical />
                <div className="form" >
                    <div class="main">
                        {departementsList.map((departement,index) => (
                            <Link to="">
                                <div class="card" key={index} onClick={() => handleCardClick(departement)}>
                                    <div class="card_main" >
                                        <img src="rh.jpg" />
                                        <p>{departement.abreviation}</p>
                                    </div>

                                    <div class="card_content">
                                        <p class="card_title">{departement.abreviation}</p>
                                        <p class="card_description">
                                            {departement.nom_departement}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                        {isModalOpen && (
                            <div className="modal-overlay">
                                <div className="modal">
                                    <span className="close" onClick={closeModal}>&times;</span>
                                    <Login />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Accueil;
