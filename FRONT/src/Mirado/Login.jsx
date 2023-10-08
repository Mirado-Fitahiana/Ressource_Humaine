import './Login.css'
import React, { useState, useEffect } from 'react';
import MenuVertical from '../Back/MenuVertical';
import MenuHorizontal from '../Back/MenuHorizontal';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login(){

    return(
        <form className="formula">
            <div className="content">
            <p align="center">Entrer votre DEPT code</p>
            <div className="inp">
                <input maxlength="1" className="inputa" type="text" placeholder=""/>
                <input maxlength="1" className="inputa" type="text" placeholder=""/>
                <input maxlength="1" className="inputa" type="text" placeholder=""/>
                <input maxlength="1" className="inputa" type="text" placeholder=""/>
            </div>
            <button>Verifier</button>
        </div>
    </form>
    );
    }
    
    

export default Login;