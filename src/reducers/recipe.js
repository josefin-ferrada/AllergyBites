import { ADD_RECIPE, DELETE_RECIPE } from  "../actions/actionTypes";


export default (
  state = {
    recipe: []
  },
  action//viene de action file
) => {
  switch(action.type){
    case ADD_RECIPE:
      return {
        ...state,
        recipe: state.recipe.concat([action.payload])
      }

    default: return state;//siempre poner default 
  }
} 