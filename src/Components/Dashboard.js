import React, { Component } from 'react';
import './Login.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import home from './../img/home.png';
import user from './../img/user.png';
import like from './../img/like.png';
import add from './../img/add.png';
import Logo from './../img/Logo.png'
import db from "../firebase/config";
class Dashboard extends Component {
  getRecipes() {
    let stateCollection = [];
    db.collection("Recipes")
      .get()
      .then(querySnapshot => {
        let index = 0;
        querySnapshot.forEach(function(doc) {
          console.log(`${doc.id} => ${doc.data().title}`);
          stateCollection[index] = {
            id: doc.id,
            recipe: {
              title: doc.data().title,
              ingredients: doc.data().ingredients,
              preparation: doc.data().preparation
            }
          };
          index++;
        });

        console.log(stateCollection);
        this.setState({ items: stateCollection });
      });
  }

  componentDidMount() {
    /* Cause your component to request data from Firebase when
       component first mounted */
    this.getRecipes();
  }

  renderState() {
    if (this.state) {
      var recetas = this.state.items.map((receta, i) => {
        console.log(receta);
        return <li key={i}>{receta.recipe.title}</li>;
      });
      return recetas;
    } else {
      return <p>Cargando...</p>;
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="column">
            <img alt="logo" src={Logo} className="timeline" />
          </div>
          <div className="column">Allergy Bites</div>
        </div>

        <section className="options">
          <select>
            <option>Celíaco</option>
            <option>Diabético</option>
          </select>
        </section>
        <section>{this.renderState()}</section>

        <footer>
          <Link to="/Dashboard">
            <img className="timeline" src={home} alt="timeline" />
          </Link>
          <Link to="/likes">
            <img className="like" src={like} alt="like" />
          </Link>
          <Link to="/createRecipe">
            <img className="newRecipe" src={add} alt="newRecipe" />
          </Link>
          <Link to="/profile">
            <img className="user" src={user} alt="user" />
          </Link>
        </footer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    newR: state.recipe.recipe
  };
};

export default connect(
  mapStateToProps,
  null
)(Dashboard);
