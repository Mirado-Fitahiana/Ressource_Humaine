import { Link, Head } from '@inertiajs/react';
// import React from 'react';
// export default function Welcome({ auth, laravelVersion, phpVersion }) {
//     return (
//         <>
           
//         </>
//     );
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const envoyerDonnees = async (donnees) => {
    try {
        const reponse = await axios.post('/inserer-donnees', donnees);
        console.log('Réponse du serveur :', reponse.data);
    } catch (erreur) {
        console.error('Erreur lors de l\'envoi des données :', erreur);
    }
};

const DistrictList = () => {
    const [districts, setDistricts] = useState([]);

    useEffect(() => {
        fetch('/get-districts')
            .then(response => response.json())
            .then(data => setDistricts(data));
    }, []);

    
    return (
        <div>
            <h1>Liste des districts</h1>
            <ul>
                {districts.map(district => (
                    <li key={district.id}>{district.nom_district}</li>
                ))}
            </ul>

            <form method="POST" action='/insert-data'>
                <input type="text" name="district" />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default DistrictList;
