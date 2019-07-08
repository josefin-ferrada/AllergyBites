import React, { Component } from 'react';
import './Login.css';
import Logo from './../img/Logo.png'


export class Register extends Component {
    render() {
        return (
            <div className='back' id="">
                <img src={Logo} id="logo" alt="logo-allergy"></img>
                <div className="cfield">
                <i className="fas fa-user-alt"></i>
                <input type="text" id="full-name" placeholder="Nombre y apellido" name=""></input>
            </div>
            
            <div className="cfield">
                <i className="fas fa-user-alt"></i>
                <input id="email" type="email"  placeholder="Correo" name=""></input>
            </div>
            <div className="cfield">
                <i className="fas fa-key"></i>
               <input type="password" id="pass" placeholder="Contraseña" name=""></input>
            </div>
            <div className="cfield">
                <i className="fas fa-key"></i>
               <input type="password" id="pass-repeat" placeholder="Repetir Contraseña" name=""></input>
            </div>
            <div >
                <button id="create" className="sign-in-style">Crear cuenta</button>
            </div>
            </div>
        )
    }
}

export default Register;
