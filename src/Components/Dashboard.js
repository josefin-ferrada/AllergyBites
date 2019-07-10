import React, { Component } from 'react';
import './Login.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import home from './../img/home.png';
import user from './../img/user.png';
import like from './../img/like.png';
import add from './../img/add.png';
import Logo from './../img/Logo.png'



class Dashboard extends Component {
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
                        
                <section className="options">
                    <select >
                        <option>Celíaco</option>
                        <option>Diabético</option>
                    </select>
                </section>
                <section>{
                    this.props.newR.map((recipe,i)=>(
                        <div key={i}>
                            <div>{recipe.title}</div>
                            <div>{recipe.ingredients}</div>
                            <div>{recipe.preparation}</div>
                        </div>
                    ))
                }</section>
               
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

const mapStateToProps = (state)=>{
    return {
      newR: state.recipe.recipe,
    };
  }

export default connect(mapStateToProps, null)(Dashboard);
