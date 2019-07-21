import { ADD_RECIPE, DELETE_RECIPE } from './actionTypes';
import store from '../store'; 
import db from "../firebase/config";
export const addRecipes = dispatch => (title, ingredients, preparation) => {
  db.collection("Recipes")
    .add({
      title: title,
      ingredients: ingredients,
      preparation: preparation
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  console.log(store.getState());
  dispatch({
    type: ADD_RECIPE,
    payload: {
      title,
      ingredients,
      preparation
    }
  });
};


 export const deleteRecipe = dispatch => (id) =>{
     dispatch({
         type: DELETE_RECIPE,
         payload: {
            id
         }
     })
 } 