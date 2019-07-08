import React from 'react';
import './Login.css';
import Logo from './../img/Logo.png';
import { withRouter } from 'react-router-dom';


function Login (props){
const {history} = props;
    
        return (
            <div className='back' id="">
                <img src={Logo} id="logo" alt="logo-allergy"></img>
                <div className="cfield">
                <i className="fas fa-user-alt"></i>
                    <input type="email" id="email-sign-in"  placeholder="Correo" name=""></input>
                </div>
                <div className="cfield">
                    <i className="fas fa-key"></i>
                <input className="password" id="password-sign-in" placeholder="Contraseña" name=""></input>
                </div>
                <div>
                    <button id="sign-in" className="sign-in-style" >Iniciar Sesión</button>
                </div>
                <div id="forgot-container">
                    <a href="#/forgot">¿Olvidaste tu contraseña?</a>
                </div>
                    <div>
                <div>
                    <a href="#/login" id="login" className="sign-in-google"> <i className="fab fa-google"></i>&nbsp;Login Google</a>
                </div>
                <div>
                    <p id="register">¿No tienes una cuenta? &nbsp;<a onClick={()=>{history.push("./Register")}}>Regístrate Aquí</a></p>
                </div>
                </div>
            </div>
        )
    }


export default withRouter(Login);
