import './Menu.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import the Link component
function MenuVertical() {
    const [departements, setDepartements] = useState([]);
    
    // select * from departement
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
    return (
        <nav >
            <ul class="mcd-menu">
                <li >
                    <Link to="/Oni/Accueil" /* className="active" */>
                        <i class="fa fa-edit"></i>
                        <strong>Accueil</strong>
                        <small>HOME</small>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <i class="fa fa-comments-o"></i>
                        <strong>Départements</strong>
                        <small>LISTE</small>
                    </Link>
                    
                    <ul>
                        {departementsList.map((departement) => (
                            <li key={departement.id}>
                                <Link to={`/Oni/Service/${departement.id_departement}`}>
                                    <i className="fa fa-globe"></i> {departement.nom_departement}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <Link to="">
                        <i class="fa fa-picture-o"></i>
                        <strong>Documents</strong>
                        <small>Documents</small>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <i class="fa fa-envelope-o"></i>
                        <strong>A propos</strong>
                        <small>Règles et autres</small>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default MenuVertical;