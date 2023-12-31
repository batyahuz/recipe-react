import { createStore, combineReducers, applyMiddleware } from 'redux';
import User from "./reducerUser";
import Recipe from './reducerRecipe';

const reducers = combineReducers({
    user: User,
    recipes: Recipe
})
const store = createStore(reducers);

export default store