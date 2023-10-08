import React, { useState } from 'react';
import '../Back/Menu.css';
import './Questionnaire.css';
import MenuVertical from '../Back/MenuVertical';
import MenuHorizontal from '../Back/MenuHorizontal';
import axios from 'axios';


function Questionnaire() {
  return (
    <div className="container">
      <MenuHorizontal />
      <div className="input-container">
        <MenuVertical />
        <div className="form">
          <QuestionnaireEditor />
          <ListeQuestion />
        </div>
      </div>

    </div>
  );
}

function ListeQuestion() {
  // Exemple de données statiques pour le tableau
  const questions = [
    { id: 1, text: "Quelle est la capitale de la France ?", type: "QCM" },
    { id: 2, text: "Quel est le plus grand organe du corps humain ?", type: "QCU" },
    { id: 3, text: "Combien de planètes dans notre système solaire ?", type: "RO" },
    { id: 4, text: "Décrivez votre plat préféré.", type: "RQ" },
  ];

  return (
    <div>
      <h3>Liste des questions</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Question</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td>{question.id}</td>
              <td>{question.text}</td>
              <td>{question.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function QuestionnaireEditor() {
  const type_question = ["QCM", "QCU", "RO", "RQ"];
  const [selectedType, setSelectedType] = useState('');

  const handleTypeSelect = (e) => {
    setSelectedType(e.target.value);
  };

  const renderQuestionContent = () => {


    if (selectedType === 'QCM') {
      const handleNombreReponsesChange = () => {
        const nombreReponsesInput = document.getElementById('nombreReponses');
        const nombreReponses = parseInt(nombreReponsesInput.value);

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = ''; // Effacer les options précédentes

        for (let i = 1; i <= nombreReponses; i++) {
          const optionInput = document.createElement('input');
          optionInput.type = 'text';
          optionInput.placeholder = `Option ${i}`;
          optionsContainer.appendChild(optionInput);
        }
      };
      return (
        <>
          <h2>Question à Choix Multiple (Unique réponse)</h2>
          <form>
            <p>
              <input type="text" placeholder='Question' className='putText' />
              <input type="number" id="nombreReponses" placeholder="Nombre de réponses incorrect." min='0' style={{ width: '300px' }} onChange={handleNombreReponsesChange} />
            </p>
            <p id="options-container">
              {/* Les options seront générées ici */}
            </p>
            <p>
              <h3>Réponse correcte</h3>
              <input type="text" />
            </p>
            <input type="number" placeholder='Coefficient' />
          </form>
        </>
      );
    } else if (selectedType === 'QCU') {
      const handleNombreReponsesChange = () => {
        const nombreReponsesInput = document.getElementById('nombreReponses');
        const nombreReponses = parseInt(nombreReponsesInput.value);

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = ''; // Effacer les options précédentes

        for (let i = 1; i <= nombreReponses; i++) {

          const optionInput = document.createElement('input');
          optionInput.type = 'text';
          optionInput.placeholder = `Option ${i}`;
          optionsContainer.appendChild(optionInput);

          const optionCheckbox = document.createElement('input');
          optionCheckbox.type = 'checkbox';
          optionCheckbox.placeholder = `Checkbox ${i}`;
          optionsContainer.appendChild(optionCheckbox);
        }
      };
      return (
        <>
          <h2>Question à Choix Multiple (Réponses multiple)</h2>
          <p>
            Veuillez cochez la case à côté si c'est une bonne réponse
          </p>
          <form>
            <p>
              <input type="text" placeholder='Question' />
              <input type="number" id="nombreReponses" placeholder="Nombre de réponses disponible." min='0' style={{ width: '300px' }} onChange={handleNombreReponsesChange} />

            </p>

            <div id="options-container">
              {/* Les options seront générées ici */}
            </div>

            <p>
              <input type="number" placeholder='Coefficient' />
            </p>
          </form>
        </>
      );
    } else if (selectedType === 'RO') {
      // Affichez le contenu spécifique au type de question RO ici
      return (
        <>
          <h2>Question à réponse ouverte</h2>
          <input type="text" placeholder='Question' />
          <p>
            <h3>Mots clefs (facultatif)</h3>
            <textarea>

            </textarea>
          </p>
          <p>
            <input type="number" placeholder='Coefficient' />
          </p>
        </>
      );

    } else if (selectedType === 'RQ') {
      return (
        <>
          <h2>Question d'évaluation sur une échelle</h2>
          <form>
            <p>
              <input type="text" placeholder='Question' />
            </p>
            <p>
              <h3>Échelle de notation correcte:</h3>
              <select className="">
                <option>Pas du tout d'accord</option>
                <option>Légèrement en désaccord</option>
                <option>Neutre</option>
                <option>Légèrement d'accord</option>
                <option>Tout à fait d'accord</option>
              </select>
            </p>
            <p>
              <input type="number" placeholder='Coefficient' />
            </p>
          </form>
        </>
      );
    } else {
      // Aucun type sélectionné, affichez un message par défaut
      return <p>Sélectionnez un type de question.</p>
    }
  };

  return (
    <div>
      <h1>Créer une nouvelle question</h1>
      <p></p>
      <p></p>
      <form>
        <select value={selectedType} onChange={handleTypeSelect}>
          <option value="">Type de question</option>
          {type_question.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        {renderQuestionContent()}
        <button type="submit">Enregistrer la question</button>
      </form>
    </div>
  );
}

export default Questionnaire;