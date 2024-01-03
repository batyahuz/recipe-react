import * as actionType from './action'

const initialState = {
    recipes: [],
    recipe: null
}

function RecipeReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.SET_RECIPES: {
            console.log(action);
            return { ...state, recipes: action.payload }
        }
        case actionType.ADD_RECIPE: {
            const recipes = [...state.recipes];
            recipes.push(action.recipe);
            return { ...state, recipes }
        }
        case actionType.EDIT_RECIPE: {
            const recipes = [...state.recipes];
            const findeIndex = recipes.findIndex(x = x.Id == action.recipes.Id);
            recipes[findeIndex] = action.payload;
            return { ...state, recipes }
        }
        case actionType.DELETE_RECIPE: {
            const recipes = state.recipes.filter(r => r.Id != action.Id);
            return { ...state, recipes }

        }
        default: {
            return { ...state }
        }
    }
}
export default RecipeReducer;
