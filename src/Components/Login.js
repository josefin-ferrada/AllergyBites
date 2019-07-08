import React, { Component } from 'react';
import './Login.css';
import Logo from './../img/Logo.png';
import { Link } from 'react-router-dom';


class Login extends Component{
    state= {
        email: "",
        password: ""
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value

        })
    }
    handleSubmit = (e) =>{
        console.log(this.state)
        e.preventDefault();

    }

    render (){
        return (
            <div className='back' id="">
                <img src={Logo} id="logo" alt="logo-allergy"></img>
                <form onSubmit={this.handleSubmit}>
                    <div className="cfield">
                    <i className="fas fa-user-alt"></i>
                        <input type="email" id="email" onChange={this.handleChange} placeholder="Correo" name=""></input>
                    </div>
                    <div className="cfield">
                        <i className="fas fa-key"></i>
                    <input className="password" type="password" id="password" onChange={this.handleChange} placeholder="Contraseña" name=""></input>
                    </div>
                    <div >
                        <button className="btn btn-primary" >Iniciar Sesión</button>
                    </div>
                </form>
                <div id="forgot-container">
                    <Link to="/forgot">¿Olvidaste tu contraseña?</Link>
                </div>
                    <div>
                <div>
                    <Link to="/login"> <i className="fab fa-google"></i>&nbsp;Login Google</Link>
                </div>
                <div>
                    <p id="register">¿No tienes una cuenta? <Link to="/Register">Regístrate Aquí</Link></p>
                </div>
                </div>
            </div>
        )
    }
}


export default Login;
