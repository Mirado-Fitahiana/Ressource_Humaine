import './Menu.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function MenuHorizontal() {
    // Utilisez l'état local pour suivre l'élément de menu actif
    const [activeMenuItem, setActiveMenuItem] = useState('');
  
    // Fonction pour mettre à jour l'élément de menu actif lorsqu'il est cliqué
    const handleMenuItemClick = (menuName) => {
      setActiveMenuItem(menuName);
    };
  
    return (
      <div>
        <nav className="navbar navbar-expand-custom navbar-mainbg">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <div className="hori-selector">
                <div className="left"></div>
              </div>
              <li className={`nav-item ${activeMenuItem === 'Services' ? 'active' : ''}`}>
                <Link
                  to="/Oni/Service"
                  className="nav-link"
                  onClick={() => handleMenuItemClick('Services')}
                >
                  <i className="fas fa-tachometer-alt"></i>Services/Département
                </Link>
              </li>
              <li className={`nav-item ${activeMenuItem === 'Annonces' ? 'active' : ''}`}>
                <Link
                  to="#"
                  className="nav-link"
                  onClick={() => handleMenuItemClick('Annonces')}
                >
                  <i className="far fa-address-book"></i>Annonces
                </Link>
              </li>
              <li className={`nav-item ${activeMenuItem === 'Annonces' ? 'active' : ''}`}>
                <Link
                  to="#"
                  className="nav-link"
                  onClick={() => handleMenuItemClick('Annonces')}
                >
                  <i className="far fa-address-book"></i>Employes
                </Link>
              </li>
              <li className={`nav-item ${activeMenuItem === 'Annonces' ? 'active' : ''}`}>
                <Link
                  to="#"
                  className="nav-link"
                  onClick={() => handleMenuItemClick('Annonces')}
                >
                  <i className="far fa-address-book"></i>Postulants
                </Link>
              </li>
              <li className={`nav-item ${activeMenuItem === 'Annonces' ? 'active' : ''}`}>
                <Link
                  to="#"
                  className="nav-link"
                  onClick={() => handleMenuItemClick('Annonces')}
                >
                  <i className="far fa-address-book"></i>Documents
                </Link>
              </li>
              <li className={`nav-item ${activeMenuItem === 'Annonces' ? 'active' : ''}`}>
                <Link
                  to="#"
                  className="nav-link"
                  onClick={() => handleMenuItemClick('Annonces')}
                >
                  <i className="far fa-address-book"></i>A propos
                </Link>
              </li>
              {/* Ajoutez d'autres éléments de menu de la même manière */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  
  export default MenuHorizontal;
