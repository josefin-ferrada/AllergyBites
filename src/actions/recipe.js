import { ADD_RECIPE, DELETE_RECIPE } from './actionTypes';
import store from '../store'; 

 export const addRecipes = dispatch => (title, ingredients, preparation) =>{
    console.log(store.getState())
     dispatch({
        type: ADD_RECIPE,
        payload : {
            
            title,
            ingredients,
            preparation
        }
     })
 }

 export const deleteRecipe = dispatch => (id) =>{
     dispatch({
         type: DELETE_RECIPE,
         payload: {
            id
         }
     })
 } 