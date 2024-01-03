import * as actionType from './action'

const initialState = {
    categories: []
}

function RecipeReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.SET_CATEGORIES:
            return { ...state, categories: action.payload }
        case actionType.ADD_CATEGORY: {
            const categories = [...state.categories];
            categories.push(action.categories);
            return { ...state, categories }
        }
        default: {
            return { ...state }
        }
    }
}
export default RecipeReducer;
