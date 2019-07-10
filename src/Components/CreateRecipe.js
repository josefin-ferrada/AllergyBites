import React, { Component } from 'react';
import './Login.css';
import Logo from './../img/Logo.png';
import { connect } from 'react-redux';
import { addRecipes } from './../actions/recipe';
import './Login.css';
import { Link } from 'react-router-dom';
import home from './../img/home.png';
import user from './../img/user.png';
import like from './../img/like.png';
import add from './../img/add.png';

class CreateRecipe extends Component {
    state= {
        title: "",
        ingredients: "",
        preparation: ""

    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value

        })
    }
    handleSubmit = (e) =>{
        console.log(this.state)
        e.preventDefault();
        this.props.addRecipe(this.state.title, this.state.ingredients, this.state.preparation)

    }
    render() {
        return (
            <React.Fragment>
            <div className='row'>
            <div className='column'>
                <img alt="logo"src={Logo} className="timeline">
                </img>
            </div>
            <div className='column'>
                
                Allergy Bites
                
            </div>
            </div>
            <form className='back' onSubmit={this.handleSubmit}>
                <input id="title" onChange={this.handleChange} placeholder="Titulo receta" name=""></input>
                <input id="ingredients"onChange={this.handleChange} placeholder="Ingredientes" name=""></input>
                <textarea id="preparation" onChange={this.handleChange} placeholder="Preparación" name=""></textarea>
                <br></br>
                
                <button className="btn btn-primary">Publicar</button>
            </form>
            <footer>
                    <Link to="/Dashboard"><img className="timeline" src={home}  alt="timeline"></img></Link>
                    <Link to="/likes"><img className="like" src={like}  alt="like"></img></Link>
                    <Link to="/createRecipe"><img className="newRecipe" src={add}  alt="newRecipe"></img></Link>
                    <Link to="/profile"><img className="user" src={user}  alt="user"></img></Link>
                </footer>
            </React.Fragment>
        )
    }
}

  const mapDispatchToProps = (dispatch) => {
    return {
      addRecipe: addRecipes(dispatch)
    }
  }
export default connect(null, mapDispatchToProps)(CreateRecipe);
