import React, { Component } from 'react';
import './Login.css';
import Logo from './../img/Logo.png'


export class Register extends Component {
    state= {
        email: "",
        password: "",
        fullName: "",
        passRepeat : ""

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
    render() {
        return (
            <form className='back' onSubmit={this.handleSubmit}>
                <img src={Logo} id="logo" alt="logo-allergy"></img>
                <div className="cfield">
                
                <i className="fas fa-user-alt"></i>
                <input type="text" id="fullName" onChange={this.handleChange} placeholder="Nombre y apellido" name=""></input>
            </div>
            
            <div className="cfield">
                <i className="fas fa-user-alt"></i>
                <input id="email" type="email" onChange={this.handleChange} placeholder="Correo" name=""></input>
            </div>
            <div className="cfield">
                <i className="fas fa-key"></i>
               <input type="password" id="password" onChange={this.handleChange} placeholder="Contraseña" name=""></input>
            </div>
            <div className="cfield">
                <i className="fas fa-key"></i>
               <input type="password" id="passRepeat" onChange={this.handleChange}  placeholder="Repetir Contraseña" name=""></input>
            </div>
            <div >
                <button className="btn btn-primary">Crear cuenta</button>
            </div>
            </form>
        )
    }
}

export default Register;
