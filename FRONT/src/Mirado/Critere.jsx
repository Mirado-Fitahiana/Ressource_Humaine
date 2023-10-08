import React, { useState, useEffect, Component } from 'react';
import './Critere.css'
import MenuVertical from '../Back/MenuVertical';
import MenuHorizontal from '../Back/MenuHorizontal';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
// ES2015 module syntax
function Critere() {
  return (

    <div className="container">
      <MenuHorizontal />
      <div className="input-container">
        <MenuVertical />
        <MultiStepForm />
      </div>

    </div>
  );

}

function MultiStepForm() {
  const [formValues, setFormValues] = useState({
    diplomeCoefficient: '',
    experienceCoefficient: '',
    adresseCoefficient: '',
    situationMatrimonialeCoefficient: '',
    genreCoefficient: '',
    nationaliteCoefficient: '',
    langueCoefficient: '',
    findepot: '',
    description: '',
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleAnnouncementGeneration = () => {
    // Generate the announcement based on formValues
    const completeAnnouncement = `
      Nous recherchons des candidats avec les critères suivants :
      - Un Diplôme Minimum: ${formValues.diplome}, Coefficient: ${formValues.diplomeCoefficient}
      - Expérience Requise: ${formValues.experience} (${formValues.experienceTypeService}), Coefficient: ${formValues.experienceCoefficient}
      - Adresse: ${formValues.adresse}, Coefficient: ${formValues.adresseCoefficient}
      - Situation Matrimoniale: ${formValues.situationMatrimoniale}, Coefficient: ${formValues.situationMatrimonialeCoefficient}
      - Genre: ${formValues.genre}, Coefficient: ${formValues.genreCoefficient}
      - Nationalité: ${formValues.nationalite}, Coefficient: ${formValues.nationaliteCoefficient}
      - Langue: ${formValues.langue} (Niveau: ${formValues.niveau}), Coefficient: ${formValues.langueCoefficient}

      Description: ${formValues.description}
    `;
    setInputValues(formValues);
    console.log(completeAnnouncement); // Update the state with the complete announcement
  };


  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (e) => {
    const { className, value } = e.target;
    setFormValues({
      ...formValues,
      [className]: value,
    });
    setInputValues({
      ...inputValues,
      [className]: value,
    });
  };

  const [diplome, setDiplome] = useState([]);
  const [genre, setGenre] = useState([]);
  const [nationalite, setNationalite] = useState([]);
  const [langue, setLangue] = useState([]);
  const [situationMatrimoniale, setSituationMatrimoniale] = useState([]);
  const [experience, setExperience] = useState([]);
  const [age, setAge] = useState([]);
  const [commune, setCommune] = useState([]);
  const [niveau, setNiveau] = useState([]);

  // Fetch data for diplome
  useEffect(() => {
    const fetchDiplome = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-all-diplome');
        setDiplome(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données des diplomes :', error);
      }
    };

    fetchDiplome();
  }, []);
  const diplomeList = diplome ? diplome : [];
  console.log(diplomeList)

  // Fetch data for genre
  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-all-genre');
        setGenre(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données des genres :', error);
      }
    };

    fetchGenre();
  }, []);
  const genreList = genre ? genre : [];

  // Fetch data for nationalite
  useEffect(() => {
    const fetchNationalite = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-all-nationalite');
        setNationalite(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données des nationalites :', error);
      }
    };

    fetchNationalite();
  }, []);
  const nationaliteList = nationalite ? nationalite : [];

  // Fetch data for langue
  useEffect(() => {
    const fetchLangue = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-all-langue');
        setLangue(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données des langues :', error);
      }
    };

    fetchLangue();
  }, []);
  const langueList = langue ? langue : [];

  // Fetch data for situationMatrimoniale
  useEffect(() => {
    const fetchSituationMatrimoniale = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-all-situation-matrimoniale');
        setSituationMatrimoniale(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données des situation-matrimoniales :', error);
      }
    };

    fetchSituationMatrimoniale();
  }, []);
  const situationMatrimonialeList = situationMatrimoniale ? situationMatrimoniale : [];

  // Fetch data for experience
  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-all-experience');
        setExperience(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données des experiences :', error);
      }
    };

    fetchExperience();
  }, []);
  const experienceList = experience ? experience : [];


  // Fetch data for experience
  useEffect(() => {
    const fetchAge = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-all-age');
        setAge(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données des ages :', error);
      }
    };

    fetchAge();
  }, []);
  const ageList = age ? age : [];

  // Fetch data for commune
  useEffect(() => {
    const fetchCommune = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-all-commune');
        setCommune(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données des communes :', error);
      }
    };

    fetchCommune();
  }, []);
  const communeList = commune ? commune : [];

  // Fetch data for niveau
  useEffect(() => {
    const fetchNiveau = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-all-niveau');
        setNiveau(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données des niveaus :', error);
      }
    };

    fetchNiveau();
  }, []);
  const niveauList = niveau ? niveau : [];

  const steps = [
    {
      step: 1,
      title: "",
      content: (
        <>
          <h2>CONSIGNES</h2>
          <p>Bienvenue à vous sur le formulaire de remplissage des besoins pour un recrutement. Voici quelques conseils lors du remplissage :</p>
          <ul>
            <li>Remplissez uniquement les cases dont vous avez besoin.</li>
            <li>Assurez-vous de fournir des informations précises et complètes pour chaque critère.</li>
            <li>Utilisez les coefficients pour indiquer l'importance de chaque critère.</li>
            <li>Prenez le temps de vérifier vos réponses avant de soumettre le formulaire.</li>
            <li>N'oubliez pas de remplir la valeur du coefficient pour chaque catégorie.</li>
            <li>Si vous avez des questions, n'hésitez pas à contacter votre supérieur ou nos équipes de recrutement.</li>
          </ul>
          <h2>Maintenant, poursuivez.</h2>
          <p>Date de fin de dépôt:
            <input type='date' name='datefindepot' />
          </p>
          <p>Poste :
            <textarea name='description' rows={'2'}></ textarea>
          </p>
        </>

      ),
    },
    {
      step: 2,
      title: "Diplôme requis",
      content: (
        <>
          <h3>La liste des diplômes disponible: </h3>
          {diplomeList.map((diplome, index) => (
            <div key={index} className="input-container">
              <p>
                <input
                  type="text"
                  name={`diplome_${index}`}
                  value={diplome.valeur_categorie}
                  readOnly
                  onChange={handleInputChange}
                  className="diplome-input"
                  placeholder="Diplôme"
                  style={{ width: '145px' }}
                />
                <input
                  type="number"
                  name={`${diplome.id_valeur_categorie}`}
                  onChange={handleInputChange}
                  className={`${diplome.valeur_categorie}`}
                  placeholder="Note"
                  style={{ width: '145px' }}
                />
              </p>
            </div>
          ))}
          <input
            className="diplomeCoefficient"
            value={formValues.diplomeCoefficient}
            onChange={handleInputChange}
            type="number"
            name="diplomeCoefficient"
            placeholder="Coefficient"
          />
        </>
      ),
    }, {
      step: 3,
      title: "Années d' éxpérience requis",
      content: (
        <>
          <h3>Années d' éxpérience dans le domaine: </h3>
          {experienceList.map((experience, index) => (
            <div key={index} className="input-container">
              <p>
                <input
                  type="text"
                  name={`experience_${index}`}
                  readOnly
                  value={experience.valeur_categorie}
                  onChange={handleInputChange}
                  className="experience-input"
                  placeholder="Diplôme"
                  style={{ width: '145px' }}
                />
                <input
                  type="number"
                  name={`${experience.id_valeur_categorie}`}
                  onChange={handleInputChange}
                  className={`${experience.valeur_categorie}`}
                  placeholder="Note"
                  min="0"
                  style={{ width: '145px' }}
                />
              </p>
            </div>
          ))}
          <input
            className="experienceCoefficient"
            value={formValues.experienceCoefficient}
            onChange={handleInputChange}
            type="number"
            name="experienceCoefficient"
            placeholder="Coefficient"
          />
        </>
      ),
    },
    {
      step: 4,
      title: "Genre et classe d' âge: ",
      content: (
        <>
          <>
            <h3>Genre préferable: </h3>
            {genreList.map((genre, index) => (
              <div key={index} className="input-container">
                <p>
                  <input
                    type="text"
                    name={`genre_${index}`}
                    readOnly
                    value={genre.valeur_categorie}
                    onChange={handleInputChange}
                    className="genre-input"
                    placeholder="Diplôme"
                    style={{ width: '145px' }}
                  />
                  <input
                    type="number"
                    name={`${genre.id_valeur_categorie}`}
                    onChange={handleInputChange}
                    className={`${genre.valeur_categorie}`}
                    placeholder="Note"
                    min="0"
                    style={{ width: '145px' }}
                  />
                </p>
              </div>
            ))}
            <input
              className="genreCoefficient"
              value={formValues.genreCoefficient}
              onChange={handleInputChange}
              type="number"
              name="genreCoefficient"
              placeholder="Coefficient"
            /></>
          <>
            <h3>Classes d' âges: </h3>
            {ageList.map((age, index) => (
              <div key={index} className="input-container">
                <p>
                  <input
                    type="text"
                    name={`age_${index}`}
                    readOnly
                    value={age.valeur_categorie}
                    onChange={handleInputChange}
                    className="age-input"
                    placeholder="Diplôme"
                    style={{ width: '145px' }}
                  />
                  <input
                    type="number"
                    name={`${age.id_valeur_categorie}`}
                    onChange={handleInputChange}
                    className={`${age.valeur_categorie}`}
                    placeholder="Note"
                    min="0"
                    style={{ width: '145px' }}
                  />
                </p>
              </div>
            ))}
            <input
              className="ageCoefficient"
              value={formValues.ageCoefficient}
              onChange={handleInputChange}
              type="number"
              name="ageCoefficient"
              placeholder="Coefficient"
            />
          </>
        </>
      ),
    },
    {
      step: 5,
      title: "Nationalités et langues parlées: ",
      content: (
        <>
          <>
            <h3>Nationalité préférable: </h3>
            {nationaliteList.map((nationalite, index) => (
              <div key={index} className="input-container">
                <p>
                  <input
                    type="text"
                    readOnly
                    name={`nationalite_${index}`}
                    value={nationalite.valeur_categorie}
                    onChange={handleInputChange}
                    className="nationalite-input"
                    placeholder="Diplôme"
                    style={{ width: '145px' }}
                  />
                  <input
                    type="number"
                    name={`${nationalite.id_valeur_categorie}`}
                    onChange={handleInputChange}
                    className={`${nationalite.valeur_categorie}`}
                    placeholder="Note"
                    min="0"
                    style={{ width: '145px' }}
                  />
                </p>
              </div>
            ))}
            <input
              className="nationaliteCoefficient"
              value={formValues.nationaliteCoefficient}
              onChange={handleInputChange}
              type="number"
              name="nationaliteCoefficient"
              placeholder="Coefficient"
            /></>
          <>
            <h3>Langues : </h3>
            {langueList.map((langue, index) => (
              <div key={index} className="input-container">
                <p>
                  <input
                    type="text"
                    readOnly
                    name={`langue_${index}`}
                    value={langue.valeur_categorie}
                    onChange={handleInputChange}
                    className="langue-input"
                    placeholder="Diplôme"
                    style={{ width: '145px' }}
                  />
                  <input
                    type="number"
                    name={`${langue.id_valeur_categorie}`}
                    onChange={handleInputChange}
                    className={`${langue.valeur_categorie}`}
                    placeholder="Note"
                    min="0"
                    style={{ width: '145px' }}
                  />
                  <select
                    value={formValues.niveau}
                    name={`niveau_${langue.id_valeur_categorie}`}
                    className='niveau'
                    style={{ width: '145px', height: '45px' }}
                    onChange={handleInputChange}
                  ><option value="" >Niveau</option>
                    {niveauList.map((niveau, index) => (
                      <option value={niveau.id_valeur_categorie} name={`niveau_${index}`} >{niveau.valeur_categorie}</option>
                    ))}
                  </select>
                </p>
              </div>
            ))}
            <input
              className="langueCoefficient"
              value={formValues.langueCoefficient}
              onChange={handleInputChange}
              type="number"
              name="langueCoefficient"
              placeholder="Coefficient"
            />
          </>
        </>
      ),
    }, {
      step: 6,
      title: "Lieux d'habitations aux alentours de: ",
      content: (
        <>
          <h3>Voici la liste des communes dans nos bases : </h3>
          {communeList.map((commune, index) => (
            <div key={index} className="input-container">
              <input
                type="checkbox"
                name={`commue_${index}`}
                className='winx'
                style={{ margin: '10px' }}
              />
              <input
                type="text"
                name={`${langue.id_valeur_categorie}`}
                value={commune.nom_commune}
                readOnly
                onChange={handleInputChange}
                className="commune-input"
                placeholder="Diplôme"
                style={{ width: '145px' }}
              />
            </div>
          ))}
          <input
            className="communeCoefficient"
            value={formValues.communeCoefficient}
            onChange={handleInputChange}
            type="number"
            name="communeCoefficient"
            placeholder="Coefficient"
          />
        </>
      ),
    }
  ];

  return (
    <>
      <div>
        <form action="#" className="form1">
          <h1>CRITÈRE D'EMBAUCHE - Étape {currentStep}</h1>
          {steps.map((step) =>
            step.step === currentStep ? (
              <div key={step.step} className="title-block">
                <h4>{step.title}</h4>
                {step.content}
                <p>
                  {currentStep === 1 && (
                    <button onClick={handleNextStep}>Commencer</button>
                  )}
                  {currentStep !== 1 && currentStep < steps.length && (
                    <button onClick={handleNextStep}>Suivant</button>
                  )}
                  {currentStep > 1 && (
                    <button onClick={handlePrevStep}>Précédent</button>
                  )}
                  {currentStep === steps.length && (
                    <>
                      <button onClick={handleAnnouncementGeneration}>PUBLIER</button>

                      <button type='submit'>
                        <Link to="/Mirado/Questionnaire" className="custom-link">Questionnaire</Link>
                      </button>
                    </>)}
                </p>
              </div>
            ) : null
          )}
        </form>
      </div>
      <div>
        {/* {currentStep === steps.length && ( */}
        <div className='form1'>
          <center><h1>NOTATION DE CHAQUE CATEGORIE </h1></center>
          <h2 style={{ fontsize: '2px', color: 'red' }} >Sachez que seul le sous-catégorie par avec la note la plus élevée s'affichera dans l' annonce</h2>
          <ul>
            {Object.entries(formValues).map(([className, value]) => (
              <li key={className}>
                <strong>{className}: </strong> {value}
              </li>
            ))}
          </ul>
        </div>
        {/* )} */}
      </div>
    </>
  );
}

export default Critere;